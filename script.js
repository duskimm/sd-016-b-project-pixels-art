// Função gerando cores hexadecimais
function gerarCorHexadecimal() {
  return `#${parseInt((Math.random() * 0xFFF))
    .toString(16)
    .padStart(3, '0')}`;
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Montando Paleta de cores
function criarPaleta() {
  const cores = ['#000'];
  for (let ind = 0; ind < cores.length; ind += 1) {
    while (cores.length < 4) {
      const newColor = gerarCorHexadecimal();
      if (newColor !== 0xFFF && newColor !== cores[ind]) {
        cores.push(newColor);
      }
    }
  }
  return cores;
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Adiconar core aos blocos da paleta de cores
const cores = criarPaleta();
const element = document.querySelector('#color-palette');
for (let ind = 0; ind < element.children.length; ind += 1) {
  const boxColor = document.getElementById(`color${ind + 1}`);
  boxColor.style.backgroundColor = cores[ind];
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Criando o Pixel Board
function criarPixelBoard(line, colum) {
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Cria tabela de pixel
  const element1 = document.getElementById('pixel-board');
  const pLine = document.createElement('ul');
  pLine.setAttribute('id', 'pixelLine');
  element1.appendChild(pLine);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Loop de cração dos pixels
  for (let ind = 0; ind < line; ind += 1) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Cria linhas de pixel em branco
    const element2 = document.getElementById('pixelLine');
    const pColum = document.createElement('li');
    pColum.className = 'pixelColum';
    element2.appendChild(pColum);
  }
  const element3 = document.querySelectorAll('.pixelColum')
  for (let ind = 0; ind < colum; ind += 1) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Cria colunar de pixel em branco
    for (let ind2 = 0; ind2 < element3.length; ind2 += 1) {
      const pBlock = document.createElement('div');
      pBlock.className = 'pixel';
      element3[ind].appendChild(pBlock);
    }
  }
}
criarPixelBoard(5, 5);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Botão limpar board
document.getElementById('clear-board').addEventListener('click', function () {
  const clearPixels = document.querySelectorAll('.pixel');
  for (let ind = 0; ind < clearPixels.length; ind += 1) {
    clearPixels[ind].style.backgroundColor = '#fff';
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Botão criar board
const btnCreate = document.getElementById('generate-board');
btnCreate.addEventListener('click', function () {
  let iputLine = document.querySelector('#board-size').value;
  let iputColum = document.querySelector('#size-colum').value;
  if (iputLine !== "" && iputColum !== "") {
    const clearBoard = document.querySelector('#pixelLine').remove();
    criarPixelBoard(iputLine, iputColum);
  } else {
    const clearBoard = document.querySelector('#pixelLine').remove();
    criarPixelBoard(5, 5);
  }
});
// Função seleciona a cor para desenhar
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function corParaDesenho(event) {
  const corInitial = document.querySelector('.selected');
  corInitial.classList.remove('selected');
  event.target.classList.add('selected');
}
// Adicionando eventos de cores ás divs
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const color1 = document.getElementById('color1');
color1.addEventListener('click', corParaDesenho);
const color2 = document.getElementById('color2');
color2.addEventListener('click', corParaDesenho);
const color3 = document.getElementById('color3');
color3.addEventListener('click', corParaDesenho);
const color4 = document.getElementById('color4');
color4.addEventListener('click', corParaDesenho);
// Função troca de cor
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function trocarCor() {
  const colorPrint = document.getElementById('pixel-board');
  colorPrint.addEventListener('click', function (event) {
    const colorSelect = document.querySelector('.selected');
    const elementPixel = event.target.className;
    if (elementPixel === 'pixel') {
      event.target.style.backgroundColor = colorSelect.style.backgroundColor;
    }
  })
}
trocarCor()
// Função troca de cor
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
