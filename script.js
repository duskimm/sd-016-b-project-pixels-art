console.log('vamo q vamo');

window.onload = function selecting() {
  const corPreta = document.getElementById('black');
  corPreta.classList.add('selected');
  const cores = document.querySelectorAll('.color');
  for (let index = 1; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
};

function selector(event) {
  const colorSelector = document.querySelectorAll('.color');
  for (let index = 0; index < colorSelector.length; index += 1) {
    colorSelector[index].classList.add('selected');
    colorSelector[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

let blackColor = document.getElementById('black');
let redColor = document.getElementById('red');
let greenColor = document.getElementById('green');
let blueColor = document.getElementById('blue');

blackColor.addEventListener('click', selector);
redColor.addEventListener('click', selector);
greenColor.addEventListener('click', selector);
blueColor.addEventListener('click', selector);

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
  const input = document.getElementById('board-size');
  if (input.value <= 0) {
    const lines = 5;
    createPixelColumns(lines);
  } else {
    lines = parseInt(input.value);
    createPixelColumns(lines);
  }
}

const submitButton = document.getElementById('generate-board');
submitButton.addEventListener('click', generator());
const input = document.getElementById('board-size');
