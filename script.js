function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor() {
  return `rgb(${generateRandomInt(256)}, ${generateRandomInt(256)}, ${generateRandomInt(256)})`;
}

function generateColorPalette(quantity) {
  const colorPalette = [];
  if (quantity > 0) {
    colorPalette.push('rgb(0, 0, 0)');
  }
  for (let counter = 1; counter < quantity;) {
    const color = generateRandomColor();
    if (!colorPalette.includes(color) && color !== 'rgb(255, 255, 255)') {
      colorPalette.push(color);
      counter += 1;
    }
  }
  return colorPalette;
}

function addColorsToColorPalette() {
  const colorPaletteElements = document.querySelectorAll('.color');
  const colorPalette = generateColorPalette(colorPaletteElements.length);

  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPaletteElements[index].style.backgroundColor = colorPalette[index];
  }
}

addColorsToColorPalette();

function generatePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';

  return pixel;
}

function generateRow(dimension) {
  const row = document.createElement('div');
  row.className = 'pixel-board-row';

  for (let counter = 0; counter < dimension; counter += 1) {
    row.appendChild(generatePixel());
  }
  return row;
}

function generatePixelBoard(dimension) {
  const pixelBoardContainer = document.querySelector('#pixel-board');

  for (let counter = 0; counter < dimension; counter += 1) {
    pixelBoardContainer.appendChild(generateRow(dimension));
  }
}

generatePixelBoard(5);

// Source: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/

document.addEventListener('click', (event) => {
  const element = event.target;

  if (element.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');

    element.classList.add('selected');
  } else if (element.classList.contains('pixel')) {
    const selectedColor = document.querySelector('.selected');

    element.style.backgroundColor = selectedColor.style.backgroundColor;
  } else if (element.id === 'clear-board') {
    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}, false);
