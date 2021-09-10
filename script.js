// Requisito2
const palette = document.getElementById('color-palette');
function createPalleteOfColor(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    const addColor = colors[index];
    const divColor = document.createElement('div');
    divColor.className = 'color';
    palette.appendChild(divColor);
    divColor.style.backgroundColor = addColor;
  }
}
createPalleteOfColor(['black', 'blue', 'red', 'green']);
window.onload = function () {
  const blackSelected = document.querySelector('.color');
  blackSelected.classList.add('selected');
};
