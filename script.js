// functions for working with elements

function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

// universal variables

const user = {
  paintingColor: 'black',
  boardSize: 5,
};

// functions for the project

function generatorPixelLine(limit) {
  const rows = getAll('.pixel-row');

  rows.forEach((row) => {
    for (let i = 0; i < limit; i += 1) {
      const pixel = createElement('div');
      addClass(pixel, 'pixel');
      plugHtml(row, pixel);
    }
  });
}

function generatorPixelRow(limit) {
  const canvas = getOne('#pixel-board');

  for (let i = 0; i < limit; i += 1) {
    const row = createElement('div');
    addClass(row, 'pixel-row');
    plugHtml(canvas, row);
  }
}

function saveColor(color) {
  user.paintingColor = color;
}

function getColor() {
  const palette = getAll('.color');

  palette.forEach((color) => {
    color.addEventListener('click', (event) => {
      const selectColor = getComputedStyle(event.target).backgroundColor;
      saveColor(selectColor);
    });
  });
}

function paintingPixel() {
  const allPixels = getAll('.pixel');

  allPixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const pixelColor = event.target.style;
      pixelColor.backgroundColor = user.paintingColor;
    });
  });
}

function resetSelection() {
  const selectedColor = getOne('.selected');
  removeClass(selectedColor, 'selected');
}

function changeSelection() {
  const palette = getAll('.color');

  palette.forEach((color) => {
    color.addEventListener('click', (event) => {
      resetSelection();
      addClass(event.target, 'selected');
    });
  });
}

function clearPainting() {
  const pixels = getAll('.pixel');
  const resetButton = getOne('#clear-board');

  resetButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
      const pixelColor = pixel.style;
      pixelColor.backgroundColor = 'white';
    });
  });
}

function customizeBoardSize() {
  const newBoardSize = getOne('#generate-board');

  newBoardSize.addEventListener('input', (event) => {
    user.boardSize = event.target.value;
  });
}

function resetCanvas() {
  const board = getOne('#pixel-board');
  const allPixels = getAll('.pixel-row');

  allPixels.forEach((pixel) => {
    board.removeChild(pixel);
  });
}

function applyNewBoardSize() {
  const vqvButton = getOne('#vqv');

  vqvButton.addEventListener('click', () => {
    if (Number.isInteger(user.boardSize)) {
      alert('Board inválido!');
    } else {
      resetCanvas();
      generatorPixelRow(parseInt(user.boardSize));
      generatorPixelLine(parseInt(user.boardSize));
    }
  });
}

window.onload = () => {
  generatorPixelRow(5);
  generatorPixelLine(5);
  getColor();
  paintingPixel();
  changeSelection();
  clearPainting();
  customizeBoardSize();
  applyNewBoardSize();
};
