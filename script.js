const body = document.getElementsByTagName('body')[0];

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
const paletteList = document.getElementById('color-palette');

function addPaletteColor(color) {
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
const pixelList = document.getElementById('pixel-board');

function selectedColor(color) {
  const colorList = document.getElementsByClassName('color');
  for (const palette of colorList) {
    if (palette.style.backgroundColor === color) {
      palette.classList.add('selected');
    }
  }
}

selectedColor('black');

function changeSelectedColor() {
  const paletteColors = document.getElementsByClassName('color');
  paletteList.addEventListener('click', (event) => {
    const newSelectedColor = event.target.style.backgroundColor;
    for (const color of paletteColors) {
      if (color.classList.contains('selected') === true) {
        if (color.style.backgroundColor !== newSelectedColor) {
          color.classList.remove('selected');
        }
      } else {
        if (color.style.backgroundColor === newSelectedColor) {
          selectedColor(newSelectedColor);
        }
      }
    }
  });
}

changeSelectedColor();

function paintPixel() {
  pixelList.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  });
}

paintPixel();

function addClearButton() {
  const clearButton = document.createElement('input');
  clearButton.type = 'button';
  clearButton.id = 'clear-board';
  clearButton.innerText = 'Limpar';
  clearButton.value = 'Limpar';
  // Referência utilizada da função insertBefore: https://stackoverflow.com/questions/5882768/how-to-append-a-childnode-to-a-specific-position
  body.insertBefore(clearButton, pixelList);
  clearButton.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (const pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
  });
}

addClearButton();
