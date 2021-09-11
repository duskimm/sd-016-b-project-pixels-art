// Requisito2
const palette = document.getElementById('color-palette');
function createPalleteOfColor(colors) {
  const arrayId = ['black', 'blue', 'red', 'green'];
  for (let index = 0; index < colors.length; index += 1) {
    const addColor = colors[index];
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.id = arrayId[index];
    palette.appendChild(divColor);
    divColor.style.backgroundColor = addColor;
  }
}
createPalleteOfColor(['black', 'blue', 'red', 'green']);

const divBoardP = document.getElementById('pixel-board');
function createDiv() {
  for (let index = 0; index < 25; index += 1) {
    const creatDiv = document.createElement('div');
    creatDiv.className = 'pixel';
    divBoardP.appendChild(creatDiv);
  }
}
createDiv();

window.onload = function carregar() {
  const color = document.querySelector('.color');
  color.classList.add('selected');
};

palette.addEventListener('click', (event) => {
  for (let index = 0; index < palette.children.length; index += 1) {
    palette.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

divBoardP.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
});
