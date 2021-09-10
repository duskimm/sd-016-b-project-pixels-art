const getPixelBoard = document.getElementById('pixel-board');
const getEachColorPalette = document.getElementsByClassName('color');
const quantityOfPixels = 25;

function creatingPixels() {
  for (let i = 1; i <= quantityOfPixels; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    getPixelBoard.appendChild(createPixel);
  }
}

function selectingColor(event) {
  const eventSelected = event;
  for (let i = 0; i < getEachColorPalette.length; i += 1) {
    getEachColorPalette[i].className = 'color';
  }
  eventSelected.target.className = 'color selected';
}

for (let i = 0; i < getEachColorPalette.length; i += 1) {
  getEachColorPalette[i].addEventListener('click', selectingColor);
}

creatingPixels();
