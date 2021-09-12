// Cria divs com classe color com cores dinamicas

let chamaDivPai = document.getElementById('color-palette');

function colorPalette(cor) {
  let primeiroFilhoDaPaletaRosa = document.createElement('div');
  primeiroFilhoDaPaletaRosa.className = 'color';
  primeiroFilhoDaPaletaRosa.style.backgroundColor = cor;
  chamaDivPai.appendChild(primeiroFilhoDaPaletaRosa);
  if (cor === 'black') {
    primeiroFilhoDaPaletaRosa.classList.add('selected');
  }
}
colorPalette('black');
colorPalette('pink');
colorPalette('purple');
colorPalette('green');

function createDivBorderPixel(numero) {
  let divPixel = document.querySelector('#pixel-board');
  // for pra criar as linhas do quadro pixel.
  for (let index = 0; index < numero; index += 1) {
    let divLine = document.createElement('div');
    divPixel.appendChild(divLine);
    divLine.classList.add('line');

    // for pra criar as divs dentro das divline

    for (let segundoIndex = 0; segundoIndex < numero; segundoIndex += 1) {
      let divPaiLine = document.querySelectorAll('.line')[index];
      let divFilho = document.createElement('div');
      divPaiLine.appendChild(divFilho);
      divFilho.classList.add('pixel');
    }
  }
}

createDivBorderPixel(5);

function adicionaSelected(event) {
  let selecionaCor = document.querySelectorAll('.color')
  for (let i = 0; i < selecionaCor.length; i += 1) {
    // className é uma constante, por isso vai manter color em todas. Pega o array inteiro
    selecionaCor[i].className = 'color';
    //  classList é uma lista de classes, pega o index do array
    event.target.classList.add('selected');

  }
}
chamaDivPai.addEventListener('click', adicionaSelected);

// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
let classePixelBoard = document.querySelector('#pixel-board');
function pintaPixel(event) {
  let selecionarCor = document.querySelector('.selected');
  let cor = selecionarCor.style.backgroundColor;
  let pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1){
    event.target.style.backgroundColor = cor;
  }
}
classePixelBoard.addEventListener('click', pintaPixel);
