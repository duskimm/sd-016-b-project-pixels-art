const palette = document.getElementById('color-palette');

function createColors() {
  const colors = ['black', 'red', 'blue', 'green'];
  for (let index = 0; index < colors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    palette.appendChild(color);
    color.style.backgroundColor = colors[index];
  }
}
createColors();
