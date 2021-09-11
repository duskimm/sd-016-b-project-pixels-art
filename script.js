const colorPalette = document.getElementById('color-palette');
const pixelFrame = document.getElementById('color-palette');


function createColors() {
  const colors = ['black', 'red', 'blue', 'green'];
  for (let index = 0; index < colors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    colorPalette.appendChild(color);
    color.style.backgroundColor = colors[index];
  }
}
createColors();

function createFrame() {
  const pixel = document.getElementById('pixel-board');
  for (let index = 1; index <= 25; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixel.appendChild(div);
  }
}
createFrame();

window.onload = function () {
  const hugoDaniel = document.querySelector('.color');
  hugoDaniel.classList.add('selected');
}
