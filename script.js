const getPixelBoard = document.getElementById('pixel-board');
const getEachColorPalette = document.getElementsByClassName('color');
const getPixel = document.getElementsByClassName('pixel');
const getButton = document.getElementById('clear-board');
const getInput = document.getElementById('board-size');
const getButtonInput = document.getElementById('generate-board');
let quantityOfPixels = 25;
let status = false;

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

function printingPixel(event) {
  const getSelected = document.getElementsByClassName('selected');
  const eventSelected = event;
  const colorSelected = getSelected[0].innerHTML;
  eventSelected.target.style.backgroundColor = colorSelected;
}

for (let i = 0; i < getPixel.length; i += 1) {
  getPixel[i].addEventListener('click', printingPixel);
}

function removePixelsColors() {
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].style.backgroundColor = 'white';
  }
}

getButton.addEventListener('click', removePixelsColors);

function checkInput() {
  if (getInput.value === '') {
    alert('Board inválido!');
    status = true;
  }
}

// function checkMinValue() {
//   if (getInput.value <= getInput.getAttribute('min')) {
//     status = true;
//   }
// }

function sizeMaxAndMin() {
  if (getInput.value < 5) {
    getInput.value = 5;
  }
  if (getInput.value > 50) {
    getInput.value = 50;
  }
}

function newPictureWithDifferentesLinesAndColumns() {
  checkInput();
  sizeMaxAndMin();
  // checkMinValue();
  if (status !== true) {
    getPixelBoard.innerHTML = '';
    const newQuantityOfPixelsForLineAndColumns = getInput.value;
    quantityOfPixels = newQuantityOfPixelsForLineAndColumns ** 2;
    console.log(newQuantityOfPixelsForLineAndColumns);
    getPixelBoard.style.width = `${newQuantityOfPixelsForLineAndColumns * 42}px`;
    creatingPixels();
    removePixelsColors();
  }
}

getButtonInput.addEventListener('click', newPictureWithDifferentesLinesAndColumns);
