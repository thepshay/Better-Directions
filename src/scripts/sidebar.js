import Address from "./address";
import { loadMap } from "./loadmap";
import {createInputDiv, createRemoveBtn, createSubmitButton, 
  createDisabledInputLi} from './new-elements';
import { calculateRoute, getAllPairs, toMatrixForm, tsp, showRoute } from './calculate-route';
export {handleNewInput, setupStartingInput, handleCalculateRoute}

function setupStartingInput() {
  const startLi = document.querySelector('.start-address');
  const startInput = document.querySelector('.start-address input');
  addAutocomplete(startInput);
}

function handleNewInput() {
  const addressUl = document.querySelector(".address-list");
  addressUl.addEventListener('click', e=>{
    addNewInputBar(e);
  })
}

function handleCalculateRoute() {
  const calculateBtn = document.querySelector('.submit-btn');
  calculateBtn.addEventListener('click', e=>{
    const inputArr = storeInput(e);
    displayRoute(inputArr);
  });
}

function addAutocomplete(input) {
  const autocompleteOptions = {
    types: []
  }
  const autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions)
}

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

function storeInput(e) {
  const inputArr = [];
  const addressUl = document.querySelectorAll(".address-list-item:not(.input-additional)");
  addressUl.forEach(li => {
    const input = li.querySelector('.address-input');
    inputArr.push(input.value);
  });
  return inputArr;
}

async function getAddresses(inputArr) {
  const addresses = await Promise.all(inputArr.map(input => getGeocode(input)));
  return addresses
}

async function getDistances(addresses){
  const pairs = getAllPairs(addresses);

  const distances = await Promise.all(pairs.map(async pair => {
    return calculateRoute(pair[0], pair[1]);
  }));
  return distances
}

async function getRoute(directions, map) {
  await Promise.all(directions.map(direction => showRoute(direction, map)));
  alert('hello')
}


function getGeocode(address) {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address' : address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        const currLat = results[0].geometry.location.lat();
        const currLng = results[0].geometry.location.lng();
        const newAddr = new Address(address, currLat, currLng);
        resolve(newAddr)
      } else {
        reject(new Error(`Cannot find address "${address}". Please try again \nStatus: ${status}`))
      }
    })
  });
}

// adds markers to given addresses, centers map at the first input
function addMarkers(addresses, map) {
  addresses.forEach((address, index) => {
    const addrGeocode = {
      lat: address.lat,
      lng: address.lng
    }

    const markerOptions = {
      map: map,
      position: addrGeocode,
      animation: google.maps.Animation.DROP
    }

    const marker = new google.maps.Marker(markerOptions);
    if (index === 0) {
      map.setCenter(addrGeocode);
      map.setZoom(10);
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    }
  })
}

function displayRoute(inputArr) {
  const map = loadMap();


  getAddresses(inputArr)
      .then(addresses => {
        addMarkers(addresses, map)
        return getDistances(addresses)
      }).then(distances => {
        const matrix = toMatrixForm(distances, inputArr.length-1);
        const directionIndex =  tsp(matrix, inputArr.length);
        const directions = getDirections(matrix, directionIndex);
        getRoute(directions, map);
      }).catch(error => {
        alert(error)
      });
}

function getDirections(matrix, directionIndex) {
  const directions = [];
  for (let i = 0; i < directionIndex.length-1; i++) {
    const dir = matrix[directionIndex[i]][directionIndex[i+1]];
    directions.push(dir);
  }
  return directions;
}
