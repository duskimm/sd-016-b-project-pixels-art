const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');

function addClassName() {
  for (let index = 0; index < colors.length; index += 1) {
    function add(event) {
      const selected = event.target;
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove('selected');
      }
      selected.classList.add('selected');
    }
    colors[index].addEventListener('click', add);
  }
}
addClassName();

function paintingPixels(e) {
  if (e.target && e.target.className === 'pixel') {
    const checkClass = document.querySelector('.selected');
    e.target.style.backgroundColor = window.getComputedStyle(checkClass, null).getPropertyValue('background-color');
  }
}
pixelBoard.addEventListener('click', paintingPixels);

// Aprendi a usar o getComputedStyle nesse site: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp para checar o valor do background da classe selected.
// Aprendi a usar o event delegation nesse site: https://davidwalsh.name/event-delegate para identificar o elemento que foi clicado dentro do elemento pai.

function cleaningFrame() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', cleaningFrame);

function generateBoardSize(value) {
  pixelBoard.innerHTML = '';
  for (let index = 1; index <= (value * value); index += 1) {
    const pixelElements = document.createElement('div');
    pixelElements.className = 'pixel';
    pixelBoard.appendChild(pixelElements);
  }
  pixelBoard.style.width = `${value * 42}px`;
}

function checkInvalidBoard(input) {
  if (input === '') {
    window.alert('Board inválido!');
  }
}

function addPixels() {
  let inputValue = document.getElementById('board-size').value;
  checkInvalidBoard(inputValue);
  if (inputValue < 5) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }
  generateBoardSize(inputValue);
}

generateBoard.addEventListener('click', addPixels);
generateBoardSize(5);
