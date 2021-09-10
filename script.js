console.log('vamo q vamo');
const colorPaintBlack = document.getElementById('blackColor');
const colorPaintRed = document.getElementById('redColor');

function selectedVerfifier() {
  const selected = document.querySelectorAll('.color');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.add('selected');
    selected[index].classList.remove('selected');
  }
}
selectedVerfifier();

function createPixelBoardLine(colum) {
  const pixelBoardhtml = document.getElementById('pixel-board');
  let divisao = document.createElement('div');
  pixelBoardhtml.appendChild(divisao);
  for (let index = 1; index <= colum; index += 1) {
    const criar = document.createElement('div');
    criar.classList.add('pixel');
    divisao.appendChild(criar);
  }
}

function createPixelColumns(line) {
  for (let index = 1; index <= line; index += 1) {
    createPixelBoardLine(5);
  }
}
createPixelColumns(5);
