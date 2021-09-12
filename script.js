function createTitleH1() {
  const createTitle = document.getElementById('container-title');
  const createH1 = document.createElement('h1');
  createH1.id = 'title';
  createH1.innerText = 'Paleta de Cores';
  createTitle.appendChild(createH1);
}
createTitleH1();

function colorPalette() {
  const colors = document.getElementById('color-palette');
  const quantityColor = 4;
  // Ref.: Encontrei à solução, que retorna as cores aleatórias para as demais paletas no site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript 
  for (let paletteIdx = 0; paletteIdx < quantityColor; paletteIdx += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';
    colors.appendChild(palette);
  }

  colors.firstElementChild.style.backgroundColor = 'black';
  colors.firstElementChild.className = 'color selected';

  for (let idx = 1; idx < quantityColor; idx += 1) {
    colors.childNodes[idx].style.backgroundColor = '#'+parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
  }
}
colorPalette();

function SquarePalette() {
  const lines = 5;
  const squareDivs = document.getElementById('pixel-board');
  for (let lineIdx = 0; lineIdx < lines; lineIdx += 1) {
    for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
      const square = document.createElement('div');
      square.className = 'pixel';
      squareDivs.appendChild(square);
    }
  }
}
SquarePalette();
