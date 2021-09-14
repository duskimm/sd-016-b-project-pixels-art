const colors = document.getElementById('color-palette');
const boardPixels = document.getElementById('pixel-board');

// FUNÇÃO QUE CRIA PALETA DE CORES
function colorPalette() {
  const quantityColor = 4;
  for (let paletteIdx = 0; paletteIdx < quantityColor; paletteIdx += 1) {
    const palette = document.createElement('div');
    palette.classList.add('color');
    colors.appendChild(palette);
  }
}

// FUNÇÃO PARA GERAR CORES ALEATÓRIAS
// Ref.: Encontrei à solução, que retorna as cores aleatórias para as demais paletas no site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function randomColor() {
  const quantityColor = 4;
  for (let idx = 1; idx < quantityColor; idx += 1) {
    colors.childNodes[idx].style.background = `#${parseInt((Math.random() * 0xFFFFFF))
      .toString(16)
      .padStart(6, '0')}`;
  }
  colors.firstElementChild.className = 'color selected';
  colors.firstElementChild.style.backgroundColor = 'black';
}

// FUNÇÃO QUE SELECIONA AS CORES NA PALETA
function selectColor(event) {
  const color = document.querySelector('.selected');
  const getColor = event.target;
  getColor.style.backgroundColor = color.style.backgroundColor;
}

// FUNÇÃO QUE PREENCHE FUNDO DO BOARD DE BRANCO
function clearPixelBoard() {
  const cleanPxl = document.getElementsByClassName('pixel');
  for (let idx = 0; idx < cleanPxl.length; idx += 1) {
    cleanPxl[idx].style.backgroundColor = 'white';
  }
}

function clearPixel() {
  const cleaning = document.getElementById('clear-board');
  cleaning.addEventListener('click', clearPixelBoard);
}

// FUNÇÃO QUE CRIA QUADRO
function boardPalette() {
  const lines = 5;
  for (let lineIdx = 0; lineIdx < lines; lineIdx += 1) {
    const boardColor = document.createElement('div');
    for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
      const boardPixelColors = document.createElement('div');
      boardPixelColors.classList.add('pixel');
      boardColor.addEventListener('click', selectColor);
      boardColor.appendChild(boardPixelColors);
    }
    boardPixels.appendChild(boardColor);
  }
}

// FUNÇÃO PARA SELECIONAR COR
function toggleSelector(event) {
  const selectedClass = document.getElementsByClassName('color selected')[0];
  selectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}
colors.addEventListener('click', toggleSelector);

colorPalette();
randomColor();
clearPixel();
boardPalette();
