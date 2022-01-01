console.log('sanity check, sidebar')

// Enables next input field and dynamically appends a clone underneath.
function handleNewInput(){
  const addressUl = document.querySelector(".address-list")
  
  // adds eventlistener to parent and checks if target's parent is li.li.input-additional
  addressUl.addEventListener('click', e => {
    if (e.target && e.target.parentElement.matches('li.input-additional') ) {
      const inputLi = document.querySelector(".input-additional");

      const newDisabledLi = inputLi.cloneNode(true);

      inputLi.classList.remove('input-additional');
      addressUl.appendChild(newDisabledLi);
      console.log('hello')
    }
  });
}

export {handleNewInput}