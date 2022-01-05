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

// Adds new li items to direction list ul
export function insertDirections(directions) {
  const dirUl = document.querySelector('.direction-list');

  const dirLi = document.createElement('li');
  const dirP = document.createElement('p');
  dirLi.classList.add('direction-item');
  dirP.textContent = `Start: ${directions[0].startAddr.addr}`
  dirLi.appendChild(dirP);
  dirUl.appendChild(dirLi);

  for (let i = 0; i < directions.length; i++) {
    const dirLi = document.createElement('li');
    const dirP = document.createElement('p');
    dirLi.classList.add('direction-item')
    dirP.textContent = `${i+1}: ${directions[i].endAddr.addr}`
    dirLi.appendChild(dirP);
    dirUl.appendChild(dirLi);
  }
}