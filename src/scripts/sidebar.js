console.log('sanity check, sidebar')

const addressUl = document.querySelector(".address-list")
const searchDiv = document.querySelector('.search-div');

// Enables next input field and dynamically appends a clone underneath.
function handleNewInput(){
  
  
  // adds eventlistener to parent and checks if target's parent is li.li.input-additional
  addressUl.addEventListener('click', e => {

    if (e.target && e.target.parentElement.matches('li.input-additional') ) {
      const inputLi = document.querySelector(".input-additional"); 
      const newDisabledLi = inputLi.cloneNode(true);

      inputLi.classList.remove('input-additional');

      // limit user to only 10 entries 
      if (document.querySelectorAll('.address-list li').length !== 10) {
        addressUl.appendChild(newDisabledLi);
      }
    }
  });
}

// deletes li that hosts the input
function handleDeleteInput() {

  addressUl.addEventListener('click', e=>{
    console.log(e.target);
    if (e.target && e.target.matches('button.remove-address')) {
      e.target.parentNode.parentNode.remove();
    }
  })


}

export {handleNewInput, handleDeleteInput}