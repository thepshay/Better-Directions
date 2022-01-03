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
    const arr = getAddresses(e, inputArr, printArray)
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

async function getAddresses(e, inputArr, callback) {

  let promises = inputArr.map( input => {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      let val = null;
      geocoder.geocode({ 'address' : input }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          const currLat = results[0].geometry.location.lat();
          const currLng = results[0].geometry.location.lng();
          const newAddr = new Address(input, currLat, currLng);
          resolve(newAddr)
        } else {
          alter('fail')
          reject('something went wrong')
        }
        
      })
    });
  })
  
  const val_1 = await Promise.all(promises);
  callback(test)
}

function printArray(arr) {
  const test = [];
  arr.forEach(ele => {
    test.push(ele)
  })
  return test;
}
