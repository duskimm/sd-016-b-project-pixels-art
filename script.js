const colors = {
  active: 'black',
  previous: ['black', 'red', 'green', 'blue']
};

const board = {
  size: 5,
  content: []
};

/* Paleta de coress */
function generatePalette() {
  const element = document.querySelector('#color-palette');
  /* Ultimas cores selecionadas */
  for (const item of colors.previous) {
    const div = document.createElement('div');
    div.classList.add('color');
    div.style.background = item;
    if (item === 'black') {
      div.classList.add('selected');
    }
    element.appendChild(div);
  }
}

function generatePixelGrid() {
  let columns = []
  let rows = [];
  const element = document.querySelector('#pixel-board');
  const div = document.createElement('div');
  div.style.background = 'white';
  div.classList.add('pixel');
  for (let i = 0; i < board.size; i += 1) {
    let per = '1fr';
    columns.push(per);
  }
  element.style.gridTemplateColumns = columns.join(' ');
  element.style.gridTemplateRows = columns.join(' ');
  for (let k = 0; k < board.size; k += 1) {
    for (let v = 0; v < board.size; v += 1) {
      div.style.background = 'white';
      div.classList.add('pixel');
      element.appendChild(div);
    }
  }
}
/*
* Atualiza as cores dos elementos;
*/
function updateElements(elements) {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.background = colors.previous[i];
  }
}

/*
* Atualiza as cores do objeto colors.
*/
function updateColorPrevious(active) {

  for (let i in colors.previous) {
    if ((colors.previous.length - 1) === Number(i))
      continue;
    colors.previous[i] = colors.previous[Number(i) + 1];
  }
  colors.previous[colors.previous.length - 1] = active;
}

function updatePalette() {
  let elements = document.querySelectorAll('.color:not(.colorpick)');
  let active, lastElement;

  elements.forEach(element => {
    element.addEventListener('click', event => {
      active = element.style.background;
      // Atualiza as cores da paleta
      updateElements(elements);
      for (let value of elements) {
        value.classList.remove('selected');
      }
      element.classList.add('selected');
      // Seleciona a cor
      colors.active = active;
    });
  });
}

function clearPixelGrid() {
  const elements = document.querySelectorAll('.pixel');
  elements.forEach(element => {
    element.style.background = 'white';
  });
}

window.onload = function () {
  // Inicializade uma paleta de cores com valores padrões
  generatePalette();
  // Atualizaz a paleta de cores;
  updatePalette();
  // Gera o Pixel Grid;
  generatePixelGrid();
  document.querySelector('#clear-board').addEventListener('click', event => {
    clearPixelGrid();
  });
  document.querySelectorAll('.pixel').forEach(element => {
    element.addEventListener('click', event => {
      element.style.background = colors.active;
    });
  });
}