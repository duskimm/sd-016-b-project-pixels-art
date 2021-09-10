const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

function createPaletteAndAddColor() {
  const colors = ['black', 'red', 'blue', 'yellow'];
  for (let c of colors) {
    const color = document.createElement('div');
    color.classList.add('color');
    palette.appendChild(color);
    color.style.backgroundColor = c;
  }
}

function createPixels(line, column) {
  for (let l = 0; l < line; l += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    board.appendChild(line);
    for (let c = 0; c < column; c += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
  }
}

createPaletteAndAddColor();
createPixels(5, 5)
