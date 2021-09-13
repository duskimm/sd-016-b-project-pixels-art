console.log('vamo q vamo');

window.onload = function selecting() {
  const corPreta = document.getElementById('black');
  corPreta.classList.add('selected');
  const cores = document.querySelectorAll('.color');
  for (let index = 1; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
};
// seletores

function selector(event) {
  const colorSelector = document.querySelectorAll('.color');
  for (let index = 0; index < colorSelector.length; index += 1) {
    colorSelector[index].classList.add('selected');
    colorSelector[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const greenColor = document.getElementById('green');
const blueColor = document.getElementById('blue');

blackColor.addEventListener('click', selector);
redColor.addEventListener('click', selector);
greenColor.addEventListener('click', selector);
blueColor.addEventListener('click', selector);

// gerando colunas e linhas
function createPixelBoardLine(line) {
  const pixelBoardhtml = document.getElementById('pixel-board');
  const divisao = document.createElement('div');
  pixelBoardhtml.appendChild(divisao);
  for (let index = 1; index <= line; index += 1) {
    const criar = document.createElement('div');
    criar.classList.add('pixel');
    divisao.appendChild(criar);
  }
}

function createPixelColumns(line) {
  for (let index = 1; index <= line; index += 1) {
    createPixelBoardLine(line);
  }
}

function generator() {
  const innerHtmlPixelBoard = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');
  if (input.value <= 0) {
    innerHtmlPixelBoard.innerHTML ='';
    const lines = 5;
    createPixelColumns(lines);
  } else {
    innerHtmlPixelBoard.innerHTML ='';
    lines = parseInt(input.value);
    createPixelColumns(lines);
  }
}

const submitButton = document.getElementById('generate-board');
submitButton.addEventListener('click', generator());
const input = document.getElementById('board-size');

// Pintando o quadro

// resetando a cor do quadro
function resetColor() {
  let pixelboardSelector = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelboardSelector.length; index += 1) {
    pixelboardSelector[index].style.backgroundColor = 'white';
  }
}

let resetElement = document.getElementById('clear-board');