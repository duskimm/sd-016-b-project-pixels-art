const numberGridColumnsAndLines = 5;

let lines = document.querySelectorAll('.gridColumns');

// Criando as divs da paleta de cores
function colorPalettesFormation(arrayColors) {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < arrayColors.length; index += 1) {
    const divColorPalette = document.createElement('div');
    colorPalette.appendChild(divColorPalette);
    divColorPalette.className = arrayColors[index];
    divColorPalette.classList.add('color');
  }
}

// Criando as linhas do grid
function gridLines(divLines) {
  for (let index = 0; index < numberGridColumnsAndLines; index += 1) {
    const divGridLines = document.createElement('div');
    divLines.appendChild(divGridLines);
    divGridLines.classList.add('pixel');
  }
}

// Criando divs do grid de pixels
function gridFormation() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < numberGridColumnsAndLines; index += 1) {
    const divGridColumns = document.createElement('div');
    pixelBoard.appendChild(divGridColumns);
    divGridColumns.classList.add('gridColumns');
    lines = document.querySelectorAll('.gridColumns');
    gridLines(lines[index]);
  }
}

window.onload = function () {
  const arrayColorsPalette = ['black', 'blue', 'red', 'green'];

  colorPalettesFormation(arrayColorsPalette);

  gridFormation();
};
