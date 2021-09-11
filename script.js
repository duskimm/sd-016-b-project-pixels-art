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
