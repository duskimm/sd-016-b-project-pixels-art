// board
const inputPixels = document.getElementById('board-size');
const buttonSize = document.getElementById('generate-board');
const linePixel = document.getElementsByClassName('line-pixel');
const boardElements = document.getElementById('pixel-board');

function createClass(classe) {
  const createDiv = document.createElement('div');
  createDiv.className = classe;
  return createDiv;
}

function createLine() {
  for (let index = 1; index <= inputPixels.value; index += 1) {
    const lineDiv = createClass('line-pixel');
    boardElements.appendChild(lineDiv);
  }
}

function createPixels(line) {
  for (let index = 1; index <= inputPixels.value; index += 1) {
    const pixel = createClass('pixel');
    line.appendChild(pixel);
  }
}

function verifyBoard() {
  if (inputPixels.value < 5) {
    inputPixels.value = '5';
  } else if (inputPixels.value > 50) {
    inputPixels.value = '50';
    console.log(inputPixels.value);
  }
}

function deleteBoard() {
  if (boardElements.children.length > 0) {
    for (let index = 0; index < boardElements.children.length; index += 0) {
      boardElements.removeChild(linePixel[index]);
    }
  }
}

function creatBoard() {
  if (inputPixels.value === '') {
    alert('Board inválido!');
  } else {
    deleteBoard();
    verifyBoard();
    createLine();
    for (let index = 0; index < linePixel.length; index += 1) {
      createPixels(linePixel[index]);
    }
    inputPixels.value = '';
  }
}

function boardOnload() {
  inputPixels.value = 5;
  creatBoard();
  inputPixels.value = '';
}

boardOnload();
buttonSize.addEventListener('click', creatBoard);

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
