export {createInputDiv, createRemoveBtn,createDisabledInputLi}

// Creates a new Input Div, adds necessary classes
function createInputDiv() {
  const removeBtn = createRemoveBtn();

  const divContainer = document.createElement('div');
  divContainer.classList.add('search-div');

  const addressInput = document.createElement('input');
  addressInput.classList.add('address-input');
  addressInput.setAttribute('type', 'text');
  addressInput.setAttribute('spellcheck', 'false');
  addressInput.setAttribute('placeholder', 'Enter Additional Address');

  divContainer.appendChild(addressInput);
  divContainer.appendChild(removeBtn);
  return divContainer
}

// Creates a new Removebutton, adds necessary classes
function createRemoveBtn() {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-address');
  removeBtn.textContent  = '🗑️'

  removeBtn.addEventListener('click', e=> {
    e.stopPropagation();
    removeLi(e);
  })
  return removeBtn;
}

// Removes the li that hosts the remove button
function removeLi(e) {
  const currLi = e.target.parentNode.parentNode;
  currLi.remove();
  if (document.querySelectorAll('.address-list li').length === 10) {
    const hiddenLi = document.querySelector("li.hidden"); 
    console.log(hiddenLi)

    hiddenLi.classList.remove('hidden');
  }
}

// Creates a new disabled input
function createDisabledInputLi() {
  const disabledLi = document.createElement('li');
  disabledLi.classList.add('address-list-item');
  disabledLi.classList.add('input-additional');
  return disabledLi;
}