import Address from "./address";
import { loadMap } from "./loadmap";
import {createInputDiv, createRemoveBtn, createSubmitButton, 
  createDisabledInputLi} from './new-elements';
import { calculateRoute, getAllPairs } from './calculate-route';


export {handleNewInput, setupStartingInput, handleCalculateRoute, addressArr}

let inputArr = [];
let addressArr = [];

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

    // TODO: find a way to get extra geocode
    handleInputs(inputArr)
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
  inputArr = [];
  const addressUl = document.querySelectorAll(".address-list-item:not(.input-additional)");
  addressUl.forEach(li => {
    const input = li.querySelector('.address-input');
    inputArr.push(input.value);
  });
  return inputArr;
}

// TODO: A Function to process inputs 
async function handleInputs(inputArr) {
  const promises = await Promise.all(inputArr.map(input => getGeocode(input)));
  // console.log(promises);

  const pairs = getAllPairs(promises);
  
  // const distances = await Promise.all(pairs.map(pair => {calculateRoute(pair[0], pair[1])));
  
  const distances = await Promise.all(pairs.map(async pair => {
    // await sleep(1100);
    return calculateRoute(pair[0], pair[1]);
  }));
  
  console.log(distances)
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
        alert(`fail ${address}`)
        // reject('something went wrong')
      }
    })
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}