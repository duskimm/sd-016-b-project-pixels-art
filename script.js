const board = document.getElementById('pixel-board');

window.onload = function createPixelArtBoard() {
  const numberOfLines = 25;

  function createDivs(numberOfDivs) {
    for (let index = 1; index <= numberOfDivs; index += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      pixelDiv.style.backgroundColor = 'white';
      pixelDiv.style.border = '1px solid black';
      board.appendChild(pixelDiv);
    }
  }
  createDivs(numberOfLines);
};

const colors = document.getElementsByTagName('li');

const colorBlack = document.querySelector('#black');
colorBlack.classList.add('selected');

function colorPicker(event) {
  const color = event.target;
  const old = document.querySelector('.selected');
  old.classList.remove('selected');
  color.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) {
  const currentColor = colors[i];
  currentColor.addEventListener('click', colorPicker);
}

function paintPixels(event) {
  const selectedColor = document.querySelector('.selected');
  const colorItself = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  const element = event.target;
  element.style.backgroundColor = colorItself;
  board.style.backgroundColor = 'white';
}

board.addEventListener('click', paintPixels);
