const colors = document.querySelector('#color-palette');
let actualColor = 'black';

function getColor() {
  colors.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.toggle('selected');
  });
}

getColor();
