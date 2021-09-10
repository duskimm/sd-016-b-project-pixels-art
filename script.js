const colors = [];
let boardSize = 0;

function isInvalidColor(color) {
  return color.endsWith('100%, 100%)') || color.endsWith('0%, 0%)') || colors.includes(color);
}

function getRandomColor() {
  let randomColor = `hsl(
    ${Math.ceil(Math.random() * 360)},
    ${Math.ceil(Math.random() * 100)}%,
    ${Math.ceil(Math.random() * 100)}%
  )`;
  if (isInvalidColor(randomColor)) randomColor = getRandomColor();
  return randomColor;
}

function setColor(element, color) {
  const { style } = element;
  style.backgroundColor = color;
}

function generateColorPalette() {
  const colorPaletteSlots = document.getElementById('color-palette').children;
  for (let index = 0; index < colorPaletteSlots.length - 1; index += 1) {
    colors.push(getRandomColor());
  }
  setColor(colorPaletteSlots[0], 'black');
  colors.forEach((color, index) => {
    setColor(colorPaletteSlots[index + 1], color);
  });
}

function paintPixel(evt) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const element = evt.target;
  element.style.backgroundColor = selectedColor;
}

function generatePixelBoard() {
  const board = document.getElementById('pixel-board');
  for (let line = 0; line < boardSize; line += 1) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('boardLine');
    for (let column = 0; column < boardSize; column += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel');
      pixelCell.addEventListener('click', paintPixel);
      boardLine.appendChild(pixelCell);
    }
    board.appendChild(boardLine);
  }
}

function selectColor(evt, inputColors) {
  inputColors.forEach((inputColor) => {
    inputColor.classList.remove('selected');
  });
  evt.target.classList.add('selected');
}

function clearPixelBoard() {
  const board = document.getElementById('pixel-board');
  board.innerHTML = '';
}

function regeneratePixelBoard(newBoardSize) {
  if (newBoardSize === '') {
    return alert('Board inválido!');
  }
  clearPixelBoard();
  generatePixelBoard();
}

function addEvents(inputColors, clearButton, boardSizeInput, generateBoardButton) {
  inputColors.forEach((inputColor) => {
    inputColor.addEventListener('click', (evt) => selectColor(evt, inputColors));
    if (!inputColor.classList.contains('fixed-color')) {
      inputColor.addEventListener('dblclick', (evt) => setColor(evt.target, getRandomColor()));
    }
  });

  clearButton.addEventListener('click', () => {
    regeneratePixelBoard(boardSize);
  });

  boardSizeInput.addEventListener('change', (evt) => {
    boardSize = evt.target.value;
  });

  generateBoardButton.addEventListener('click', () => {
    regeneratePixelBoard(boardSizeInput.value);
  });
}
window.onload = () => {
  const inputColors = document.querySelectorAll('.color');
  const clearButton = document.getElementById('clear-board');
  const boardSizeInput = document.getElementById('board-size');
  const generateBoardButton = document.getElementById('generate-board');
  boardSize = 5;
  generateColorPalette();
  generatePixelBoard();
  addEvents(inputColors, clearButton, boardSizeInput, generateBoardButton);
};
