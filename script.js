const numberInput = document.getElementById('board-size');

const numberGridColumnsAndLines = numberInput.value;

let lines = document.querySelectorAll('.gridColumns');

const arrayColorsPalette = ['black', 'blue', 'red', 'green'];

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
    divGridLines.classList.add('pixel', 'backGroundSet');
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

// Selecionando a cor preta como a selecionada inicialmente
function defautColorSelected() {
  const defautSelected = document.querySelector('.color');
  defautSelected.classList.add('selected');
}

// Colocando a class selected na cor clicada
function listenerPalette(event) {
  document.querySelector('.selected').classList.remove('selected');
  const divPaletteSelected = event.target;
  divPaletteSelected.classList.add('selected');
}

// Colocando cor no pixel clicado
function listenerPixels(event) {
  const divPixelSelected = event.target;
  const classSelectedColor = document.querySelector('.selected').classList[0];
  divPixelSelected.setAttribute('class', 'pixel');
  divPixelSelected.classList.add(classSelectedColor);
}

// Criando o botão limpar tudo
const btnReset = document.getElementById('clear-board');
function reset() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].className = ('pixel backGroundSet');
  }
}

// Apaga as divs dos pixels criados por default

window.onload = function () {
  colorPalettesFormation(arrayColorsPalette);

  gridFormation();

  defautColorSelected();

  const clickPalette = document.getElementById('color-palette');

  clickPalette.addEventListener('click', listenerPalette);

  const clickPixels = document.getElementById('pixel-board');

  clickPixels.addEventListener('click', listenerPixels);

  btnReset.addEventListener('click', reset);
};
