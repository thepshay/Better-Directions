import {loadMap} from './loadmap'

const addressUl = document.querySelector(".address-list")
const searchDiv = document.querySelector('.search-div');

function addAutoToStartInput(){
  const startInput = document.querySelector('.start-address input');
  addAutocomplete(startInput);
}


// Enables next input field and dynamically appends a input bar underneath.
function handleNewInput(){
  console.log('handleNewInput')
  // creates a new input bar
  addressUl.addEventListener('click', e => {

    if (e.target && e.target.parentElement.matches('li.input-additional') ) {


      const inputLi = document.querySelector(".input-additional"); 
      const newDisabledLi = inputLi.cloneNode(true);
      inputLi.classList.remove('input-additional');  // undisables current li
      
      // limit user to only 10 entries
      // it hits 10, adds a hidden class to last element (used in handleDelete Input)
      if (document.querySelectorAll('.address-list li').length === 10) {
        newDisabledLi.classList.add('hidden')
      }
      addressUl.appendChild(newDisabledLi);

      //add autocomplete address to inputs
      const input = inputLi.querySelector('.address-input')
      addAutocomplete(input)
    }
  });
}

// deletes li that hosts the input
function handleDeleteAddress() {
  console.log('handleDeleteAddress')
  // removes parent li 
  addressUl.addEventListener('click', e=>{
    if (e.target && e.target.matches('button.remove-address')) {
      e.target.parentNode.parentNode.remove();

      // If there is 9 showing elements, unhides hidden element
      if (document.querySelectorAll('.address-list li').length === 10) {
        const hiddenLi = document.querySelector(".hidden"); 
        hiddenLi.classList.remove('hidden');
      }
    }
  })
}

function handleSubmitAddress() {
  console.log('handleSubmitAddress')
  addressUl.addEventListener('click', e=>{
    if (e.target && e.target.matches('button.submit-address')) {
      const li = e.target.parentNode.parentNode
      const input = li.querySelector('.address-input')
      console.log(input.value)
    }
  })
}

function addAutocomplete(input) {
  console.log('addAutocomplete')
  const autocompleteOptions = {
    types: []
  }
  const autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions)
}

export {handleNewInput, handleDeleteAddress, addAutoToStartInput, 
  handleSubmitAddress}