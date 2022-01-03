import Address from "./address";
import { loadMap } from "./loadmap";
import {createInputDiv, createRemoveBtn, createSubmitButton, 
  createDisabledInputLi} from './new-elements';
import { printAddressAr, getAllDistance } from './calculate-route';


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
    const arr = getAddresses(e, inputArr)
    arr.then(val => getPairs(val))
    .then(val1 => console.log(val1)); //array of pairs
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

async function getAddresses(e, inputArr) {

  const array = [];
  
  for (const ele of inputArr) {
    const newElem = await getGeocode(ele);
    array.push(newElem);
  }
  console.log(array);
  // THIS RETURNS A PROMISE
  return array;
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

function getPairs(array) {
  const pairArr = [];
  for(let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      pairArr.push([array[i], array[j]]);
    }
  }
  // console.log(pairArr);
  return pairArr
}