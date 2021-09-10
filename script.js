function getRandomColor(seed) {
  let randomColor = `hsl(
    ${Math.ceil(Math.random() * 357) + seed},
    ${Math.ceil(Math.random() * 100)}%,
    ${Math.ceil(Math.random() * 100)}%
  )`;
  if (randomColor.endsWith('100%, 100%)')) {
    randomColor = getRandomColor();
  }
  return randomColor;
}

function generateColorPalette() {
  const colorPaletteSlots = document.getElementById('color-palette').children;
  const colors = [];
  for (let index = 0; index < colorPaletteSlots.length; index += 1) {
    colors.push(getRandomColor(index));
  }
  colors.forEach((color, index) => {
    colorPaletteSlots[index].setAttribute('style', `background-color: ${color};`);
  });
}

window.onload = () => {
  generateColorPalette();
};
