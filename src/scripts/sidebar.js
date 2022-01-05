import { loadMap, getGeocode, addAutocomplete, calculateRoute, addMarkers, 
  showRoute } from "./map";
import { createInputDiv, createDisabledInputLi } from './new-elements';
import { getAllPairs, toMatrixForm, tsp } from './calculation';

// loads all sidebar functions 
export function loadSubmitSidebarFunctions() {
  setupStartingInput();
  handleNewInput();
  handleCalculateRoute();
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

    if (document.querySelectorAll('.address-list li').length === 9) {
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
  calculateBtn.addEventListener('click', e=>{
    const inputArr = storeInput(e);
    displayRoute(inputArr);
  });
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

  getAddressesAsync(inputArr)
      .then(addresses => {
        loadingDiv.classList.remove('hidden')
        addMarkers(addresses, map)
        return getDistancesAsync(addresses)
      }).then(distances => {
        const matrix = toMatrixForm(distances, inputArr.length-1);
        const directionIndex =  tsp(matrix, inputArr.length);
        const directions = getDirections(matrix, directionIndex);
        return Promise.resolve(directions)
      }).then( directions => {
        getRouteAsync(directions, map);
        let tempAlert = 'Best path to take is:\n';
        directions.forEach(direction =>{
          tempAlert += `${direction.startAddr.addr}\n`
        });
        alert(tempAlert);
        console.log(tempAlert)
        loadingDiv.classList.add('hidden')
      }
      ).catch(error => {
        alert(error)
      });
}

async function getAddressesAsync(inputArr) {
  const addresses = await Promise.all(inputArr.map(input => getGeocode(input)));
  return addresses
}

async function getDistancesAsync(addresses){
  const pairs = getAllPairs(addresses);

  const distances = await Promise.all(pairs.map(async pair => {
    return calculateRoute(pair[0], pair[1]);
  }));
  return distances
}

async function getRouteAsync(directions, map) {
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
