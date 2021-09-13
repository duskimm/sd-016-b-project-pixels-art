//Lista de cores possiveis
let arrayColors = ['--blue', '--red', '--green', '--yellow', '--purple', '--orange', '--aqua', '--black', '--gray'];
//Cria as divs de paleta de cores
for (ind = 0; ind < 4; ind += 1) {
  const element = document.getElementById('color-palette');
  const divElement = document.createElement('div');
  let newID = 'item' + (ind + 1);
  divElement.setAttribute("id", newID);
  element.appendChild(divElement);
}
//Função para retoranr um numero ramdômico
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//Função para adicionar cores nas divs de paleta de cores
function setPixelColor(pixel) {
  pixel.style.backgroundColor = arrayColors[getRandomNumber(0, arrayColors.length)];
}
//Adicionando cores nas divs de paleta de cores
const colorPalette = document.getElementById('color-palette');
for (ind = 0; ind < colorPalette.children.length(); ind += 1) {

}
//Função para criar a grid de pixels
function createPrixelGrid(lin, col) {
  for (line = 0; line <= lin; line += 1) {
    for (colum = 0; colum <= col; colum += 1) {
      const grid = getElementById('grid-drawing');
      const gridElement = document.createElement('div');
      divElement.setAttribute("class", 'pixel-empty');
      grid.appendChild(gridElement);
    }
  }
}
