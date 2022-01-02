export {createInputDiv, createRemoveBtn,createDisabledInputLi}

function createInputDiv() {
  // const submitBtn = createSubmitButton();
  const removeBtn = createRemoveBtn();

  const divContainer = document.createElement('div');
  divContainer.classList.add('search-div');

  const addressInput = document.createElement('input');
  addressInput.classList.add('address-input');
  addressInput.setAttribute('type', 'text');
  addressInput.setAttribute('spellcheck', 'false');
  addressInput.setAttribute('placeholder', 'Enter Additional Address');


  divContainer.appendChild(addressInput);
  // divContainer.appendChild(submitBtn);
  divContainer.appendChild(removeBtn);
  return divContainer
}


function createRemoveBtn() {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-address');
  removeBtn.textContent  = '🗑️'

  removeBtn.addEventListener('click', e=> {
    e.stopPropagation();
    console.log('trash');
    removeLi(e);
  })
  return removeBtn;
}

function createDisabledInputLi() {
  const disabledLi = document.createElement('li');
  disabledLi.classList.add('address-list-item');
  disabledLi.classList.add('input-additional');
  return disabledLi;
}

function removeLi(e) {
  const currLi = e.target.parentNode.parentNode;
  currLi.remove();

  if (document.querySelectorAll('.address-list li').length === 10) {
    const hiddenLi = document.querySelector("li.hidden"); 
    console.log(hiddenLi)

    hiddenLi.classList.remove('hidden');
  }
}

// function createSubmitButton() {
//   const submitBtn = document.createElement('button');
//   submitBtn.classList.add('submit-address');
//   submitBtn.textContent  = '✔️';

//   submitBtn.addEventListener('click', e=> {
//     e.stopPropagation();
//     submitAddress(e);
//   });
//   return submitBtn;
// }

// function submitAddress(e) {
//   const parentDiv = e.target.parentNode;
//   const input = parentDiv.querySelector('input.address-input');
//   console.log(input.value)
// }