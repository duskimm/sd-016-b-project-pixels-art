// Paleta de cores e classificação dentro do document.
const paletColorBlack = document.getElementsByClassName('color')[0];
const paletColorTwo = document.getElementsByClassName('color')[1];
const paletColorThree = document.getElementsByClassName('color')[2];
const paletColorFour = document.getElementsByClassName('color')[3];
const colorButton = document.getElementById('color-button');

// Define que o preto está selecionado já quando a página carrega.
paletColorBlack.classList.add('selected');
paletColorBlack.style.backgroundColor = 'black';

// Cores que podem ser utilizadas na paleta.
const paletColors = ['red', 'green', 'blue', 'yellow', 'orange', 'grey', 'pink'];
let indexColors = 0;

paletColorTwo.style.backgroundColor = 'grey';
paletColorThree.style.backgroundColor = 'brown';
paletColorFour.style.backgroundColor = 'blue';

// Evento para mudar as cores das paletas.
colorButton.addEventListener('click', () => {
  paletColorTwo.style.backgroundColor = paletColors[indexColors];
  paletColorThree.style.backgroundColor = paletColors[indexColors + 1];
  paletColorFour.style.backgroundColor = paletColors[indexColors + 2];
  indexColors += 3;
  if (indexColors > 7) {
    indexColors = 0;
  }
});

// Recupera o elemento com o Id 'color-palet'.
const colorPalet = document.getElementById('color-palette');

// Adiciona a classe 'selected' à paleta que foi clicada, removendo das que foram clicadas anteriormente.
let selectedColor = paletColorBlack.style.backgroundColor;
colorPalet.addEventListener('click', (event) => {
  for (let index = 0; index < colorPalet.children.length; index += 1) {
    colorPalet.children[index].className = 'color';
  }
  selectedColor = event.target.style.backgroundColor;
  event.target.classList.add('selected');
});

// Recupera a tabela em branco.
const pixel = document.getElementById('pixel-board');

// Evento para pintar a tabela.
pixel.addEventListener('click', (event) => {
  const vitao = event.target;
  vitao.style.backgroundColor = selectedColor;
});
// Recuperando as divs que possuem a classe 'pixel'.
// const lines = document.getElementsByClassName('line');
// console.log(lines[0]);

// console.log(lines.length);
// Funµção para adicionar blocos inline (elementos dentro de cada div com a classe 'pixel'.
// function criaBlocosInline() {
//  const blocosInline = document.createElement('div');
//  for (let index = 0; index < lines.length; index += 1) {
//    console.log(index);

//  }
// }

// criaBlocosInline();
