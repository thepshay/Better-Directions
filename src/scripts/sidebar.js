import { loadMap, getGeocode, addAutocomplete, calculateRoute, addMarkers, 
  showRoute, addInfoWindow } from "./map";
import { createInputDiv, createDisabledInputLi, insertDirections } from './new-elements';
import { getAllPairs, timeToStr, toMatrixForm, tsp, calculateTime, calculateDistance } from './calculation';

// loads all sidebar functions 
export function loadSubmitSidebarFunctions() {
  handleTabs();
  setupStartingInput();
  handleNewInput();
  handleCalculateRoute();
}

// adds functionailty to tabs, switch page when tab is clicked
function handleTabs() {
  const inputTab = document.querySelector('#input-tab');
  const dirTab = document.querySelector('#direction-tab');

  inputTab.addEventListener('click', (e)=>{
    openTab('input', e)
  })

  dirTab.addEventListener('click', (e) => {
    openTab('direction', e)
  })
}

// hides all tab pages then unhides the desired page
function openTab(id, e = null) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden')
  }

  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active')
  }

  if (e === null) {
    document.getElementById('direction-tab').classList.add('active')
  } else {
    e.currentTarget.classList.add('active');
  }
  document.getElementById(id).classList.remove('hidden')
}

// handles the first input 
function setupStartingInput() {
  const startLi = document.querySelector('.start-address');
  const startInput = startLi.querySelector('.start-address input');
  addAutocomplete(startInput);
}

// handles every new input generated
function handleNewInput() {
  const addressUl = document.querySelector(".address-list");

  // when click on gray box, adds a new input bar
  addressUl.addEventListener('click', e=>{
    addNewInputBar(e);
  })
}

// Undisables li, and appends a new input div
// Adds a new disabled li 
// Limits user to 9 input addresses
function addNewInputBar(e) {
  if (e.target && e.target.matches('li.input-additional')){
    const newLi = document.querySelector('.input-additional');
    const addressUl = document.querySelector(".address-list");
    newLi.appendChild(createInputDiv());
    newLi.classList.remove('input-additional')

    const disabledLi = createDisabledInputLi()
    addressUl.appendChild(disabledLi);

    if (document.querySelectorAll('.address-list li').length === 11) {
      disabledLi.classList.add('hidden')
    }

    const input = newLi.querySelector('.address-input')
    addAutocomplete(input)
  }
}

// stores the input addresses of the user
// calculates the best route for given addresses
// displays marker and route
function handleCalculateRoute() {
  const calculateBtn = document.querySelector('.submit-btn');
  calculateBtn.addEventListener('click',calculateRouteFromInput);
}

function calculateRouteFromInput(e) {
  const inputArr = storeInput(e);
  displayRoute(inputArr);
}

// stores the input of the user and returns array of inputs
function storeInput(e) {
  const inputArr = [];
  const addressUl = document.querySelectorAll(".address-list-item:not(.input-additional)");
  addressUl.forEach(li => {
    const input = li.querySelector('.address-input');
    inputArr.push(input.value);
  });
  return inputArr;
}

// Turns inputArr into array of address objects
// Calculates direction from all addresses 
// Calculates the best route to take from given directions
// Displays route from directions
function displayRoute(inputArr) {
  const map = loadMap();
  const loadingDiv = document.querySelector('.loading-grayscreen')
  const calculateBtn = document.querySelector('.submit-btn');
  calculateBtn.classList.add('submit-btn-disabled')
  calculateBtn.removeEventListener('click',calculateRouteFromInput);

  getAddressesAsync(inputArr)
      .then(addresses => {
        // only add loading screen if calculations take a significant time
        loadingDiv.classList.remove('hidden')
        const markers = addMarkers(addresses, map);
        addInfoWindow(markers, addresses, map);
        return getDistancesAsync(addresses);
      }).then(distances => {
        const matrix = toMatrixForm(distances, inputArr.length-1);
        const directionIndex =  tsp(matrix, inputArr.length);
        const directions = getDirections(matrix, directionIndex);

        return Promise.resolve(directions)
      }).then( directions => {
        getRouteAsync(directions, map, calculateBtn);
        displayDirection(directions);
        loadingDiv.classList.add('hidden')
      }
      ).catch(error => {
        calculateBtn.addEventListener('click',calculateRouteFromInput);
        loadingDiv.classList.add('hidden')
        alert(error)
      });
}


async function getAddressesAsync(inputArr) {
  const addresses = await Promise.all(inputArr.map(input => getGeocode(input)));
  return addresses
}

async function getDistancesAsync(addresses){
  const pairs = getAllPairs(addresses);
  let count = 0;
  const distances = await Promise.all(pairs.map(async pair => {
    count++;
    return delayQueryRoute(pair[0], pair[1], count)
  }));
  return distances
}

// adds 1s for each route query
// at 1 second delay, get no error at 10 inputs
// can be a 20-30 second delay for 7+ entries but with errors
// might call for dynamic adjustment of delay time based off of input size?
const delayQueryRoute = (addr1, addr2, count) => {
  return new Promise((resolve) => {
    setTimeout( async () => {
      resolve(await calculateRoute(addr1, addr2));
    }, 1000 * count);
  });
};

async function getRouteAsync(directions, map, calculateBtn) {
  calculateBtn.addEventListener('click',calculateRouteFromInput);
  calculateBtn.classList.remove('submit-btn-disabled')
  await Promise.all(directions.map(direction => showRoute(direction, map)));
}

function getDirections(matrix, directionIndex) {
  const directions = [];
  for (let i = 0; i < directionIndex.length-1; i++) {
    const dir = matrix[directionIndex[i]][directionIndex[i+1]];
    directions.push(dir);
  }
  return directions;
}

// displays the directions on a new tab
// populates the list with directions and displays time and distance
function displayDirection(directions) {
  document.querySelector('.start-header').classList.add('hidden');
  document.querySelector('.direction-header').classList.remove('hidden');
  insertDirections(directions);

  const duration = calculateTime(directions);
  const durationStr = timeToStr(duration);
  insertDuration(durationStr);

  const distance = calculateDistance(directions);
  insertDistance(distance)

  openTab('direction');
}

function insertDuration(duration) {
  const durationP = document.querySelector('.duration');
  durationP.textContent = `Total Time: ${duration}`;
}

function insertDistance(distance) {
  const distanceP = document.querySelector('.distance');
  distanceP.textContent = `Total Distance: ${distance} mi`
}


