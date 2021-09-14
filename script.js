// board
const numberPixels = 5;
const linePixel = document.querySelectorAll('.line-pixel');
const boardElements = document.getElementById('pixel-board');

function createPixel(classe) {
  const createDiv = document.createElement('div');
  createDiv.className = classe;
  return createDiv;
}

function createLine(line) {
  for (let index = 1; index <= numberPixels; index += 1) {
    const pixel = createPixel('pixel');
    line.appendChild(pixel);
  }
}

function creatBoard() {
  for (let index = 0; index < linePixel.length; index += 1) {
    createLine(linePixel[index]);
  }
  return linePixel;
}

creatBoard();

// button clear board
const clearboard = document.getElementById('clear-board');
const divPixel = document.getElementsByClassName('pixel');

function resetBoard() {
  for (let index = 0; index < divPixel.length; index += 1) {
    divPixel[index].style.backgroundColor = 'white';
  }
}

clearboard.addEventListener('click', resetBoard);

// colors
function random() {
  const randomPalette = Math.floor(Math.random() * 16777215).toString(16);// https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = `#${randomPalette}`;
  return randomColor;
}

const colorPalette = document.getElementById('color-palette');
const colorType = document.getElementsByClassName('color');
colorType[0].classList = 'color';
colorType[0].style.backgroundColor = 'black';
colorType[2].style.backgroundColor = random();
colorType[3].style.backgroundColor = random();
colorType[1].style.backgroundColor = random();

// Pintar e Apagar
let divTarget = '';
let pincelColor = '';

function removeSelectedClass() {
  if (divTarget !== '' && divTarget.classList.contains('selected')) {
    divTarget.classList.remove('selected');
  }
}

function selectColor(event) {
  removeSelectedClass();
  divTarget = event.target;
  pincelColor = divTarget.style.backgroundColor;
  divTarget.classList.add('selected');
}

function pincel(event) {
  if (divTarget !== '') {
    const localPaint = event.target;
    localPaint.style.backgroundColor = pincelColor;
  }
}

function eraser(event) {
  const erase = event.target;
  erase.style.backgroundColor = 'white';
}
// preset pincel onload (black)
function presetColor(event) {
  if (divTarget === '') {
    const onloadPaint = event.target;
    onloadPaint.style.backgroundColor = 'black';
  }
}

boardElements.addEventListener('click', presetColor);

// eventos
colorPalette.addEventListener('click', selectColor);
boardElements.addEventListener('click', pincel);
boardElements.addEventListener('dblclick', eraser);
