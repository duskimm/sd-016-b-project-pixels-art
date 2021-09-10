window.onload = function createPixelArtBoard() {
  const numberOfLines = 25;

  function createDivs(numberOfDivs) {
    for (let index = 1; index <= numberOfDivs; index += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      pixelDiv.style.backgroundColor = 'white';
      pixelDiv.style.border = '1px solid black';
      const board = document.getElementById('pixel-board');
      board.appendChild(pixelDiv);
    }
  }
  createDivs(numberOfLines);
};

const colorBlack = document.querySelector('#black');
colorBlack.classList.add('selected');
const colorBlue = document.querySelector('#blue');
const colorGreen = document.querySelector('#green');
const colorRed = document.querySelector('#red');

function colorPicker(event) {
  const color = event.target;
  const old = document.querySelector('.selected');
  old.classList.remove('selected');
  color.classList.add('selected');
}

colorBlue.addEventListener('click', colorPicker);
colorGreen.addEventListener('click', colorPicker);
colorRed.addEventListener('click', colorPicker);
colorBlack.addEventListener('click', colorPicker);
