const pixelBoard = document.getElementById('pixel-board');
const black = document.getElementById('black');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
let pixels;

function createBoard(grids) {
  for (let index = 1; index <= grids; index += 1) {
    pixels = document.createElement('div');
    pixels.classList.add('pixel');
    pixelBoard.appendChild(pixels);
  }
}

createBoard(25);

function test(event) {
  const x = document.querySelector('.selected');
  x.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', test);
red.addEventListener('click', test);
green.addEventListener('click', test);
blue.addEventListener('click', test);
