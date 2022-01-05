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
    if (e.target && e.target.matches('div.modal')) {
      modal.style.display = 'none';
    }
  });
}
