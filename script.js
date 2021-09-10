// Requisito 2 e 3 - Cores dos botões
const colorBtns = document.getElementsByClassName('color');
colorBtns[0].style.backgroundColor = 'black';
colorBtns[1].style.backgroundColor = 'red';
colorBtns[2].style.backgroundColor = 'green';
colorBtns[3].style.backgroundColor = 'purple';

// Requisito 4 e 5 - Quadro de pixels
const pixelBoard = document.querySelector('#pixel-board');
const pixelBoardLines = pixelBoard.children;

function pixelAttribution(index) {
  for (let i = 0; i < 5; i += 1) {
    const onePixel = document.createElement('section');
    onePixel.className = 'pixel';
    pixelBoardLines[index].appendChild(onePixel);
  }
}

function lineDef() {
  for (let i = 0; i < 5; i += 1) {
    pixelAttribution(i);
  }
}
lineDef();

// Requisito 6 - Classe selected
function defaultColorSelected() {
  localStorage.setItem('defaultColor', 'black');
  colorBtns[0].className = 'color selected';
}
defaultColorSelected();

// Requisito 7 - Aplicar classe a cor escolhida
const paleta = document.querySelector('#color-palette');
let targetAtual = '';
let corAtual = 'black';

function unselect() {
  const selectedToBeRemoved = document.querySelector('.selected');
  selectedToBeRemoved.className = 'color';
}

function colorSelected() {
  paleta.addEventListener('click', (event) => { // Referência para a arrowFunction https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners
    if (event.target.className === 'color') {
      unselect();
      targetAtual = event.target;
      corAtual = targetAtual.style.backgroundColor;
      targetAtual.className = 'color selected';
    }
  });
}
colorSelected();

// Requisito 8 - Aplica a cor do selected na grade de pixels
// Cor atual está sendo declarada no requisito 7 para uso aqui
const gradePixels = document.querySelector('#pixel-board');
let alvo = '';
function paint() {
  gradePixels.addEventListener('click', (event) => {
    alvo = event.target;
    alvo.style.backgroundColor = corAtual;
  });
}
paint();
