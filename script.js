console.log('vamo q vamo');

window.onload = function selecting() {
  const corPreta = document.getElementById('black');
  corPreta.classList.add('selected');
};

function createPixelBoardLine(colum) {
  const pixelBoardhtml = document.getElementById('pixel-board');
  const divisao = document.createElement('div');
  pixelBoardhtml.appendChild(divisao);
  for (let index = 1; index <= colum; index += 1) {
    const criar = document.createElement('div');
    criar.classList.add('pixel');
    divisao.appendChild(criar);
  }
}

function createPixelColumns(line) {
  for (let index = 1; index <= line; index += 1) {
    createPixelBoardLine(colum);
  }
}

function changeDimension() {
  const altura = document.getElementById('height-changer');
  const largura = document.getElementById('width-changer');
  if (altura.value == '' && largura.value == '') {
    const line = 5;
    colum = 5;
    createPixelColumns(line);
  } else {
    line = parseInt.altura.value;
    colum = parseInt.largura.value;
    createPixelColumns(line);
  }
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', changeDimension());
