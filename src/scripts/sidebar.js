import { loadMap } from "./loadmap";
import {createInputDiv, createRemoveBtn, createSubmitButton, 
  createDisabledInputLi} from './new-elements';

export {handleNewInput, setupStartingInput, handleCalculateRoute}

let addressArr = [];

function setupStartingInput() {
  const startLi = document.querySelector('.start-address');
  // const submitBtn = startLi.querySelector('.submit-address');
  // submitBtn.addEventListener('click', e=>{
  //   e.stopPropagation();
  //   console.log('check');
  // })

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
    storeAddress(e);
    addMarkers(e);
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

function storeAddress(e) {
  addressArr = [];
  const addressUl = document.querySelectorAll(".address-list-item:not(.input-additional)");
  addressUl.forEach(li => {
    const input = li.querySelector('.address-input');
    addressArr.push(input.value);
  });
  console.log(addressArr);
}

function addMarkers(e) {
  const startingAddress = addressArr[0];
  const map = loadMap();
  const geocoder = new google.maps.Geocoder();

  // recenters the map on starting address
  let center = true;
  addressArr.forEach( address=> {
    codeAddress(address, geocoder, map, center);
    center = false;
  })
}

function codeAddress(address, geocoder, map, center) {
  geocoder.geocode( {'address': address}, function(results, status) {
    if (status =='OK') {

      if (center) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(10)
      }

      const marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}