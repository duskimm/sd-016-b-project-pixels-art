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
function colorSelected() {
  localStorage.setItem('defaultColor', 'black');
  colorBtns[0].className = 'color selected';
}
colorSelected();
