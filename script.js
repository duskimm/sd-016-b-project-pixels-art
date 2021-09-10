function colorsPallete(colorsHexa) {
  const containerPallete = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = colorsHexa[i];
    containerPallete.appendChild(colorDiv);
  }
  return containerPallete;
}
colorsPallete(['#000000', '#D9D9D9', '#F2B138', '#003F63']);

function createPixel() {
  const boardPixel = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    boardPixel.appendChild(pixel);
  }
}
createPixel();
