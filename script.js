const paleta = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
function createColumnLines(size) {
  for (let index = 0; index < size; index += 1) {
    const column = document.createElement('div');
    column.className = 'column';
    pixelBoard.appendChild(column);
    document.querySelectorAll('.column');
    for (let indice = 0; indice < size; indice += 1) {
      const lines = document.createElement('div');
      lines.className = 'pixel';
      column.appendChild(lines);
    }
  }
} 
createColumnLines(5);

function startingColors() {
  document.querySelector('#black').style.backgroundColor = 'black';
  document.querySelector('#red').style.backgroundColor = 'red';
  document.querySelector('#yellow').style.backgroundColor = 'yellow';
  document.querySelector('#blue').style.backgroundColor = 'blue';
  const black = document.querySelector('#black');
  black.className = 'color selected';
} 
startingColors();

