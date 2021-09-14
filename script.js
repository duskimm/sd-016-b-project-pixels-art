// Função gerando cores hexadecimais
function gerarCorHexadecimal() {
  return `#${parseInt((Math.random() * 0xFFF))
    .toString(16)
    .padStart(3, '0')}`;
}
// Criar Bloco de Cores
function criarBlocoDeCores(blocos) {
  for (let ind = 0; ind < blocos; ind += 1) {
    const newDiv = document.getElementById('color-palette');
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color');
    colorBlock.setAttribute('id', `color${ind + 1}`);
    newDiv.appendChild(colorBlock);
  }
}
criarBlocoDeCores(4);
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
// Adiconar core aos blocos da paleta de cores
function addCores() {
  const cores = criarPaleta();
  const element = document.querySelector('#color-palette');
  for (let ind = 0; ind < element.children.length; ind += 1) {
    const boxColor = document.getElementById(`color${ind + 1}`);
    boxColor.style.backgroundColor = cores[ind];
  }
}
addCores();
// Criando o Pixel Board
function criarPixelBoard(line, colum) {
  // Cria tabela de pixel
  const element1 = document.getElementById('pixel-board');
  const pLine = document.createElement('ul');
  pLine.setAttribute('id', 'pixelLine');
  element1.appendChild(pLine);
  // Loop de cração dos pixels
  for (let ind = 0; ind < line; ind += 1) {
    // Cria linhas de pixel em branco
    const element2 = document.getElementById('pixelLine');
    const pColum = document.createElement('li');
    pColum.className = 'pixelColum';
    element2.appendChild(pColum);
  }
  const element3 = document.querySelectorAll('.pixelColum')
  for (let ind = 0; ind < colum; ind += 1) {
    // Cria colunar de pixel em branco
    for (let ind2 = 0; ind2 < element3.length; ind2 += 1) {
      const pBlock = document.createElement('div');
      pBlock.className = 'pixel';
      element3[ind].appendChild(pBlock);
    }
  }
}
criarPixelBoard(5, 5);
// Função limpar a grid
function limparDesenho() {}
// Inserindo botões ao DOM
const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', limparDesenho());
const btnCreate = document.getElementById('create');
btnCreate.addEventListener('click', function () {
  let iputLine = document.querySelector('#size-line').value;
  let iputColum = document.querySelector('#size-colum').value;
  if (iputLine !== "" && iputColum !== "") {
    const clearBoard = document.querySelector('#pixelLine').remove();
    criarPixelBoard(iputLine, iputColum);
  } else {
    const clearBoard = document.querySelector('#pixelLine').remove();
    criarPixelBoard(5, 5);
  }
});

