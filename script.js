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

function createDiv() {
  const divS = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const creatDiv = document.createElement('div');
    creatDiv.className = 'pixel';
    divS.appendChild(creatDiv);
  }
}
createDiv();

window.onload = function () {
  const color = document.querySelector('.color');
  color.classList.add('selected');
};

palette.addEventListener('click', (event) => {
  for (let index = 0; index < palette.children.length; index += 1) {
    palette.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});
