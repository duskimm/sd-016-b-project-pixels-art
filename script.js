const colorPalette = document.querySelector('#color-palette');
const color = document.querySelectorAll('.color');

const pixelBoard = document.querySelector('#pixel-board');

// Requisito 7
colorPalette.addEventListener('click', (event) => {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }

  if (event.target.classList.contains('color')) {
    event.target.classList.add('selected');
  }
});

// Requisito 8
pixelBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const selected = document.querySelector('.selected');
    const selectedColor = getComputedStyle(selected).backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  }
});

// Requisito 9
const clearBoardButton = document.querySelector('#clear-board');

clearBoardButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

// Requisito 10
const generateBoardButton = document.querySelector('#generate-board');

generateBoardButton.addEventListener('click', () => {
  const boardSize = document.querySelector('#board-size');
  let input = boardSize.value;
  const pixel = document.querySelectorAll('.pixel');

  if (input === '') {
    alert('Board inválido!');
  } 

  if (input < 5) {
    input = 5;
    boardSize.value = 5;
  }

  if (input > 50) {
    input = 50;
    boardSize.value = 50;
  }

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.width = `${input}px`;
    pixel[i].style.height = `${input}px`;
    pixel[i].style.backgroundColor = 'unset';
  }
});

// Requisito 11

// Requisito 12
for (let i = 1; i < color.length; i += 1) {
  let a = Math.random() * 255;
  let b = Math.random() * 255;
  let c = Math.random() * 255;
  color[i].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}
