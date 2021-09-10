const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

function createPaletteAndAddColor() {
  const colors = ['black', 'red', 'blue', 'yellow'];
  for (const c of colors) {
    const color = document.createElement('div');
    color.classList.add('color');
    palette.appendChild(color);
    color.style.backgroundColor = c;
    if (color.style.backgroundColor === 'black') {
      color.classList.add('selected')
    }
  }
}

function createPixels(line, column) {
  for (let l = 0; l < line; l += 1) {
    const lines = document.createElement('div');
    lines.classList.add('line');
    board.appendChild(lines);
    for (let c = 0; c < column; c += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      lines.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
  }
}


createPaletteAndAddColor();
createPixels(5, 5);
