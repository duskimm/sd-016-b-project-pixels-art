const colors = document.getElementById('color-palette');

// FUNÇÃO QUE CRIA PALETA DE CORES
function colorPalette() {
  const quantityColor = 4;
  for (let paletteIdx = 0; paletteIdx < quantityColor; paletteIdx += 1) {
    const palette = document.createElement('div');
    palette.classList.add('color');
    colors.appendChild(palette);
  }
}
colorPalette();

// FUNÇÃO PARA GERAR CORES ALEATÓRIAS
// Ref.: Encontrei à solução, que retorna as cores aleatórias para as demais paletas no site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function randomColor() {
  const randomcolors = document.getElementById('color-palette');
  const quantityColor = 4;
  for (let idx = 1; idx < quantityColor; idx += 1) {
    randomcolors.childNodes[idx].style.background = `#${parseInt((Math.random() * 0xFFFFFF))
      .toString(16)
      .padStart(6, '0')}`;
  }
  colors.firstElementChild.className = 'color selected';
  colors.firstElementChild.style.backgroundColor = 'black';
}
randomColor();

// FUNÇÃO QUE CRIA QUADRO
function boardPalette() {
  const boardPixels = document.getElementById('pixel-board');
  const lines = 5;
  for (let lineIdx = 0; lineIdx < lines; lineIdx += 1) {
    const boardColor = document.createElement('div');
    for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
      const boardPixelColors = document.createElement('div');
      boardPixelColors.classList.add('pixel');
      boardColor.addEventListener('click' , selectColor);
      boardColor.appendChild(boardPixelColors);
    }
    boardPixels.appendChild(boardColor);
  }
}
boardPalette();

// FUNÇÃO PARA SELECIONAR COR
function toggleSelector(event) {
  const selectedClass = document.getElementsByClassName('color selected')[0];
  selectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}
colors.addEventListener('click', toggleSelector);

function selectColor(event) {
  const color = document.querySelector('.selected');
  const getColor = event.target;
  getColor.style.backgroundColor = color.style.backgroundColor;
}

