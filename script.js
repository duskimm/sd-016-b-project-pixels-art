const mainContent = document.querySelector('.main-content');
const divColorClass = document.getElementsByClassName('color');
const pixelBox = document.getElementsByClassName('pixel');
const getColor = document.querySelectorAll('.color');
// const sectionColorPalette = document.querySelector('#color-palette');
let colorTabela = 'black';

function defaultSquare(boardStyle) {
  const change = boardStyle;
  change.style.border = '1px solid black';
  change.style.width = '40px';
  change.style.height = '40px';
  change.style.margin = '0.01px';
  change.style.padding = '15px';
  change.style.display = 'inline-block';
  change.style.backgroundColor = 'white';

  return boardStyle;
}

function createDiv(nameClass) {
  const genericDiv = document.createElement('div');
  genericDiv.className = nameClass;

  return genericDiv;
}

function createSectionId(nameId) {
  const genericSection = document.createElement('section');
  genericSection.id = nameId;

  return genericSection;
}

// Cria a paleta de cores

// function createPaletteColors() {
//   sectionColorPalette.appendChild(createDiv('color black selected'));
//   sectionColorPalette.appendChild(createDiv('color red'));
//   sectionColorPalette.appendChild(createDiv('color blue'));
//   sectionColorPalette.appendChild(createDiv('color green'));
// }

// createPaletteColors();

function aleatoryColors() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
  // Fonte para o código que gera cores aleatórias https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
}

const colorPack = document.querySelectorAll('.color');

function setColorPalette() {
  colorPack[0].style.backgroundColor = 'black';
  for (let index = 1; index < colorPack.length; index += 1) {
    colorPack[index].style.backgroundColor = aleatoryColors();
  }
  // return q;
}

setColorPalette();

function buttonClear() {
  const createButtonClear = document.createElement('div');
  createButtonClear.id = 'clear-board';
  mainContent.appendChild(createButtonClear).innerText = 'Limpar';
}

buttonClear();

function boardInput() {
  const newBoardInput = document.createElement('input');
  newBoardInput.id = 'board-size';
  newBoardInput.min = 1;
  newBoardInput.max = 50;
  newBoardInput.placeholder = 'Insira aqui um valor entre 5 e 50';
  newBoardInput.type = 'number';

  mainContent.appendChild(newBoardInput);

  return newBoardInput.value;
}

boardInput();

function valueBoardBtn() {
  const generateBoard = document.createElement('div');
  generateBoard.id = 'generate-board';
  mainContent.appendChild(generateBoard).innerText = 'VQV';
}

valueBoardBtn();

let newUserCount = document.querySelector('#board-size').value;
newUserCount = 5;
const valueBtnBoard = document.querySelector('#generate-board');

// monta o quadro

function inputColor(e) {
  e.style.backgroundColor = colorTabela;
}

function mountBoard(numberBoard) {
  for (let index = 0; index < numberBoard; index += 1) {
    const sectionPixel = createSectionId('pixel-board');
    mainContent.appendChild(sectionPixel);
  }

  for (let indexX = 0; indexX < numberBoard; indexX += 1) {
    for (let indexY = 0; indexY < numberBoard; indexY += 1) {
      const divPixel = createDiv('pixel');
      const divFather = document.querySelectorAll('#pixel-board');
      defaultSquare(divPixel);
      divFather[indexY].appendChild(divPixel);
    }
  }
}

// exclui o quadro

function unMountBoard() {
  const board = document.querySelectorAll('#pixel-board');
  for (let index = 0; index < board.length; index += 1) {
    mainContent.removeChild(board[index]);
  }
}

// Insere evento a cada pixel e pinta cada um deles
function insertEventSquare() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', () => {
      console.log(`pixelBox ${index}`);
      inputColor(pixelBox[index]);
    });
  }
}

// testa valores < > e vazio, exclui tabela antiga e
// monta a nova com o novo número do input

valueBtnBoard.addEventListener('click', () => {
  console.log('teste click newUserCount');
  newUserCount = document.querySelector('#board-size').value;

  if (newUserCount === '' || newUserCount === 0) {
    alert('Board inválido!');
  } else if (newUserCount < 5) {
    alert('Valor é menor que 5');
    newUserCount = 5;
  } else if (newUserCount > 50) {
    alert('Valor é maior que 50');
    newUserCount = 50;
  } else {
    newUserCount = parseInt(newUserCount, 10);
    unMountBoard();
    mountBoard(newUserCount);
    insertEventSquare();
  }
});

mountBoard(newUserCount);

// altera as classes das cores, e insere o 'selected' na cor selecionada

function changeClass(cor) {
  let newString = '';
  for (let index = 0; index < divColorClass.length; index += 1) {
    if (divColorClass[index].className.includes('selected')) {
      newString = divColorClass[index].className.replace('selected', '');
      divColorClass[index].className = newString;
    } if (divColorClass[index].className.includes(cor)) {
      divColorClass[index].className = `color ${cor} selected`;
    }
  }
}
// busca as cores selecionadas

function getColorPalette(a) {
  if (a.target.className.includes('black')) {
    colorTabela = colorPack[0].style.backgroundColor;
    changeClass('black');
  } else if (a.target.className.includes('red')) {
    colorTabela = colorPack[1].style.backgroundColor; // https://eslint.org/docs/rules/prefer-destructuring
    changeClass('red');
  } else if (a.target.className.includes('blue')) {
    colorTabela = colorPack[2].style.backgroundColor;
    changeClass('blue');
  } else if (a.target.className.includes('green')) {
    colorTabela = colorPack[3].style.backgroundColor;
    changeClass('green');
  }
  return colorTabela;
}

// Seleciona a cor correta para a pintura

for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', (event) => {
    getColorPalette(event);
  });
}

insertEventSquare();

// insere cor branca em todos os pixels inicial

for (let index = 0; index < pixelBox.length; index += 1) {
  pixelBox[index].style.backgroundColor = 'white';
}

// Limpa toda a tabela pintando de branco

const clear = document.getElementById('clear-board');

clear.addEventListener('click', () => {
  for (let index = 0; index < pixelBox.length; index += 1) {
    console.log('limpa tabela');
    pixelBox[index].style.backgroundColor = 'white';
  }
});
