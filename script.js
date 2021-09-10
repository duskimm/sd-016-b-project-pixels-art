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

window.onload = () => {
  generateColorPalette();
};

const inputColor = document.querySelectorAll('.color:not(.fixed-color)');
inputColor.forEach((input) => {
  input.addEventListener('click', (evt) => setColor(evt.target, getRandomColor()));
});
