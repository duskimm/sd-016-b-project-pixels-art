//criando a matriz do quadro de pintura 5x5:
let n = 5; // numero de linhas e colunas (matriz quadrada)
function createMatriz (n) {
 // o loop abaixo cria as linhas:
 for (let i = 0; i < n; i += 1) {
  const matriz = document.getElementById('pixel-board');
  const createLine = document.createElement('div');
  createLine.className = 'line';
  matriz.appendChild(createLine);
 }
 const line = document.getElementsByClassName('line');
 // o loop abaixo pega cada linha e acrescenta colunas:
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    const createColumn = document.createElement('div');
    createColumn.className = 'pixel';
    line[i].appendChild(createColumn);
  }
}
} 
createMatriz (n);  

//Seleciona uma cor da paleta de cores para pintar:
function selectedPaint() {
  const colorSelected = document.querySelector('#color-palette');
  colorSelected.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      selected.classList.remove('selected'); // fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
      event.target.classList.add('selected'); // acrescentou no que foi clicado
    }
  });
}
selectedPaint();

// pintar pixel apos selecionar a cor e somente o pixel desejado:
function Paint () {
const matrixPaint = document.getElementById('pixel-board');
matrixPaint.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const currentColor = document.querySelector('.selected').id; //cor atual selecionada
    const changeColorPixel = event.target; 
    changeColorPixel.style.backgroundColor = currentColor; //muda a cor do pixel para a cor selecionada
  }
});
}
Paint ();

// Apagar todo o quadro, deixando completamente branco:
function clearBoard() {
const buttonClear = document.getElementById('clear-board'); 
const pixels = document.getElementsByClassName('pixel');
buttonClear.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {   
    pixels[i].style.backgroundColor = 'white';
  }
});
}
clearBoard();

// input e botao para aumentar o quadro de pintura

/* const input = document.getElementById('board-size');

const buttonInitial = document.getElementById('generate-board');

let inputInt = 5;

input.addEventListener('keyup',(event) => {
  inputInt = parseInt(event.target.value,10);
});

function matrix () {
  for (let i = 0; i < inputInt; i += 1) {
    const matriz = document.getElementById('pixel-board');
  
    const createLine = document.createElement('div');
  
    createLine.className = 'line';
  
    matriz.appendChild(createLine);
  }
  const line = document.getElementsByClassName('line');
  
  // o loop abaixo pega cada linha e acrescenta colunas.
  for (let i = 0; i < inputInt; i += 1) {
    for (let j = 0; j < inputInt; j += 1) {
      const createColumn = document.createElement('div');
  
      createColumn.className = 'pixel';
  
      line[i].appendChild(createColumn);
    }
  }
}

buttonInitial.addEventListener('click', () => {
  if (input.value === '') {
    alert("Board inválido!");
  } else {
    matrix();
  }
}); */
