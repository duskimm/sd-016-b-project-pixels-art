const colors = [];

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
  element.setAttribute('style', `background-color: ${color};`);
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

function generatePixelBoard(boardSize) {
  const board = document.getElementById('pixel-board');
  for (let line = 0; line < boardSize; line += 1) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('boardLine');
    for (let column = 0; column < boardSize; column += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel');
      boardLine.appendChild(pixelCell);
    }
    board.appendChild(boardLine);
  }
}

window.onload = () => {
  const boardSize = 5;
  generateColorPalette();

  generatePixelBoard(boardSize);

  const inputColor = document.querySelectorAll('.color:not(.fixed-color)');
  inputColor.forEach((input) => {
    input.addEventListener('click', (evt) => setColor(evt.target, getRandomColor()));
  });
};
