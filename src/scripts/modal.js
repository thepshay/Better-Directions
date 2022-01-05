export function handleModal() {
  const infoDiv = document.querySelector('.info');
  const modal = document.querySelector('.modal');
  infoDiv.addEventListener('click', e => {
    modal.style.display = 'flex';
  });

  const closeModalBtn = document.querySelector('.close');
  closeModalBtn.addEventListener('click', e => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', e=> {
    console.log(`target: ${e.target}`);
    console.log(`current target: ${cur}`)
  })
}
