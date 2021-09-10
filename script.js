const palette = document.getElementById('color-palette');

function createPaletteAndAddColor() {
  const colors = ['black', 'red', 'blue', 'yellow', 'gray', 'brown', 'aqua', 'blueviolet', 'green'];
  for (let i = 0; i < 9; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    palette.appendChild(color);
    color.style.backgroundColor = colors[i];
  }
}

createPaletteAndAddColor();
