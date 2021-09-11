// Variáveis Globais
const paletteBox = ['black', '#8871FE', '#D0CD94', '#FF331F'];
const sectionPalette = document.getElementById('color-palette');
const sectionBoard = document.getElementById('board');

// Função que cria os quadrados
function creatColorPalette() {
  for (let index = 0; index < paletteBox.length; index += 1) {
    const liPalette = document.createElement('div');
    liPalette.style.background = paletteBox[index];
    liPalette.className = 'color';
    sectionPalette.appendChild(liPalette);
  }
}
creatColorPalette();

function pixelBoard() {
  const divBoard = document.createElement('div');
  divBoard.id = 'pixel-board';
  sectionBoard.appendChild(divBoard);
}
pixelBoard();

function boardSquares(n) {
  const diviBoard = document.getElementById('pixel-board');
  for (let index = 0; index < n; index += 1) {
    const square = document.createElement('div');
    square.classList.add('pixel');
    diviBoard.appendChild(square);
  }
}
console.log(boardSquares(25));
