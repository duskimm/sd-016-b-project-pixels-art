window.onload = function selected() {
  const colors = document.getElementById('color-palette');
  colors.addEventListener('click', toggleSelector);
  colors.firstElementChild.className = 'color selected';
  colors.firstElementChild.style.backgroundColor = 'black';
};

// FUNÇÃO QUE CRIA H1
function createTitleH1() {
  const createTitle = document.getElementById('container-title');
  const createH1 = document.createElement('h1');
  createH1.id = 'title';
  createH1.innerText = 'Paleta de Cores';
  createTitle.appendChild(createH1);
}
createTitleH1();

// FUNÇÃO QUE CRIA PALETA DE CORES
function colorPalette() {
  const colors = document.getElementById('color-palette');
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

// FUNÇÃO QUE CRIA BOTÃO LIMPAR
function createBtnClear() {
  const clearBtn = document.getElementById('section-tools');
  const createButtonClear = document.createElement('button');
  createButtonClear.id = 'clear-board';
  createButtonClear.innerHTML = 'Limpar';
  clearBtn.appendChild(createButtonClear);
}
createBtnClear();

// FUNÇÃO QUE CRIA INPUT
function createInput() {
  const setFrame = document.getElementById('section-tools');
  const createInput = document.createElement('input');
  createInput.id = 'board-size';
  createInput.type = 'number';
  createInput.min = 1;
  createInput.max = 50;
  setFrame.appendChild(createInput);
  if (createInput.min < 0) {
    alert('Board inválido!');
  }
}
createInput();

// FUNÇÃO QUE CRI BOTÃO VQV
function createBtn() {
  const vqvBtn = document.getElementById('section-tools');
  const createButton = document.createElement('button');
  createButton.id = 'generate-board';
  createButton.innerHTML = 'VQV';
  vqvBtn.appendChild(createButton);
}
createBtn();
