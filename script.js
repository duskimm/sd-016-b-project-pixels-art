const paletaDeCores = document.querySelectorAll('.color');
const pixelLi = document.querySelectorAll('.pixel');
const colors = ['black', 'red', 'blue', 'green'];
let cont = 0;

function adicionarCores(localCor) {
  const localCorOne = localCor;
  localCorOne.style.backgroundColor = colors[cont];
  if (localCorOne.style.backgroundColor === 'black') {
    localCorOne.classList.add('selected');
  }
  cont += 1;
}

function removerSelect() {
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].classList.remove('selected');
  }
}

function selecionaCor(event) {
  const clicado = event.target;
  removerSelect();
  clicado.classList.add('selected');
}

function pintarOPixel(event) {
  const a = event.target;
  const colorSelect = document.querySelector('.selected').style.backgroundColor;
  a.style.backgroundColor = colorSelect;
}

for (let i = 0; i < pixelLi.length; i += 1) {
  pixelLi[i].addEventListener('click', pintarOPixel);
}

for (let i = 0; i < paletaDeCores.length; i += 1) {
  adicionarCores(paletaDeCores[i]);
  paletaDeCores[i].addEventListener('click', selecionaCor);
}

const classButton = document.querySelector('#id-button-resetar');
const buttonC = document.createElement('button');

buttonC.id = 'clear-board';
buttonC.innerText = 'Limpar';
classButton.appendChild(buttonC);
buttonC.addEventListener('click', () => {
  for (let i = 0; i < pixelLi.length; i += 1) {
    pixelLi[i].style.backgroundColor = 'white';
  }
});
