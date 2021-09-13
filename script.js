window.onload = function selected() {
  const colors = document.getElementById('color-palette');
  colors.firstElementChild.className = 'color selected';
  colors.firstElementChild.style.backgroundColor = 'black';
};

// função que cria H1
function createTitleH1() {
  const createTitle = document.getElementById('container-title');
  const createH1 = document.createElement('h1');
  createH1.id = 'title';
  createH1.innerText = 'Paleta de Cores';
  createTitle.appendChild(createH1);
}
createTitleH1();

// Função que cria a Paleta de cores
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

// Função para gerar cores aleatórias
// Ref.: Encontrei à solução, que retorna as cores aleatórias para as demais paletas no site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function randomColor() {
  const randomcolors = document.querySelector('#color-palette');
  const quantityColor = 4;
  for (let idx = 1; idx < quantityColor; idx += 1) {
    randomcolors.childNodes[idx].style.background = `#${parseInt((Math.random() * 0xFFFFFF))
      .toString(16)
      .padStart(6, '0')}`;
  }
}
randomColor();

// Função que cria o quadro
function SquarePalette() {
  const squareDivs = document.getElementById('pixel-board');
  const lines = 5;
  for (let lineIdx = 0; lineIdx < lines; lineIdx += 1) {
    const square = document.createElement('div');
    for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
      const squareDiv2 = document.createElement('div');
      squareDiv2.classList.add('pixel');
      square.appendChild(squareDiv2);
    }
    squareDivs.appendChild(square);
  }
}
SquarePalette();

const switchClass = document.getElementById('color-palette');
switchClass.addEventListener('click', toggleSelector);

function toggleSelector(event) {
  const selectedClass = document.getElementsByClassName('color selected')[0];
  selectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

function createBtnClear() {
  const clearBtn = document.getElementById('section-tools');
  const createButtonClear = document.createElement('button');
  createButtonClear.id = 'clear-board';
  createButtonClear.innerHTML = 'Limpar';
  clearBtn.appendChild(createButtonClear);
}
createBtnClear()

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
createInput()

function createBtn() {
  const vqvBtn = document.getElementById('section-tools');
  const createButton = document.createElement('button');
  createButton.id = 'generate-board';
  createButton.innerHTML = 'VQV';
  vqvBtn.appendChild(createButton);
}
createBtn()
