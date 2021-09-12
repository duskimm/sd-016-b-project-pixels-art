const body = document.getElementById('body');

function pageTitle(string) {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = string;
  body.appendChild(title);
}

pageTitle('Paleta de Cores');

function createPalette(colors) {
  const paletteList = document.createElement('div');
  paletteList.id = 'color-palette';

  for (const color of colors) {
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    paletteColor.style.backgroundColor = color;
    paletteList.appendChild(paletteColor);
  }

  body.appendChild(paletteList);
}

createPalette(['red', 'blue', 'green']);

function addPaletteColor(color) {
  const paletteList = document.getElementById('color-palette');
  const newColor = document.createElement('div');
  newColor.className = 'color';
  newColor.style.backgroundColor = color;
  paletteList.prepend(newColor);
}

addPaletteColor('black');

function addPixelBoard(height, width) {
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  for (let i = 0; i < height; i += 1) {
    const line = document.createElement('div');
    for (let j = 0; j < width; j += 1) {
      const paintingPixel = document.createElement('div');
      paintingPixel.className = 'pixel';
      line.appendChild(paintingPixel);
    }
    pixelBoard.appendChild(line);
  }
  body.appendChild(pixelBoard);
}

addPixelBoard(5, 5);

function selectedColor(color) {
  const paletteList = document.getElementsByClassName('color');
  for (const palette of paletteList) {
    if (palette.style.backgroundColor === color) {
      palette.classList.add('selected');
    }
  }
}

selectedColor('black');
