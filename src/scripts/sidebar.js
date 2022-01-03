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
    storeAddress(e, inputArr)
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

function storeAddress(e, inputArr) {
  console.log(inputArr);
}