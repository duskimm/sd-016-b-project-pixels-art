/* eslint-disable no-param-reassign */

// Criando os pixels

const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

// Selecionar a cor
const colorP = document.getElementById('color-palette');

function selectColor(event) {
  const selectedColor = document.getElementsByClassName('selected');
  selectedColor[0].classList.remove('selected');
  event.target.className += ' selected';
  console.log(colorP);
}

for (let i = 0; i < colorP.children.length; i += 1) {
  colorP.children[i].addEventListener('click', selectColor);
  console.log(colorP.children[i]);
}
