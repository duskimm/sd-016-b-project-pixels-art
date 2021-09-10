// Requisito 2 - Cores dos botões
const colorBtns = document.getElementsByClassName('color');
colorBtns[0].style.backgroundColor = 'black';
colorBtns[1].style.backgroundColor = 'red';
colorBtns[2].style.backgroundColor = 'green';
colorBtns[3].style.backgroundColor = 'purple';

// Requisito 4 = Quadro de pixels
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
