// criando a matriz do quadro de pintura 5x5
// o loop abaixo cria as linhas
for (let i = 0; i < 5; i += 1) {
  const matriz = document.getElementById('pixel-board');

  const createLine = document.createElement('div');

  createLine.className = 'line';

  matriz.appendChild(createLine);

}
const line = document.getElementsByClassName('line');

// o loop abaixo pega cada linha e acrescenta colunas.
for (let i = 0; i < 5; i += 1) {

  for (let j = 0; j < 5; j += 1) {
    const createColumn = document.createElement('div');

    createColumn.className = 'pixel';

    line[i].appendChild(createColumn);

  }
}
// funcao para selecionar cor da paleta de cores para pintar
function selectedPaint() {
  const colorSelected = document.querySelector('#color-palette');
  colorSelected.addEventListener('click', (event) => {

    const selected = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      selected.classList.remove('selected'); // fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
      event.target.classList.add('selected');
    }
  });
}

selectedPaint();

// pintar apos selecionar a cor e somente o pixel desejado
const matrixPaint = document.getElementById('pixel-board');

matrixPaint.addEventListener('click', (event) => {

  if (event.target.className === 'pixel') {
    const currentColor = document.querySelector('.selected').id;
    const changeColorPixel = event.target;
    changeColorPixel.style.backgroundColor = currentColor;
  }

});

// Apagar todo o quadro, deixando completamente branco
const buttonClear = document.getElementById('clear-board');

const pixels = document.getElementsByClassName('pixel');

buttonClear.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
