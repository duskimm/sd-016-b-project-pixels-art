function criaHeader() {
  const titulo = document.querySelector('header');
  const criaH1 = document.createElement('h1');
  criaH1.innerText = 'Paleta de Cores';
  criaH1.id = 'title';
  titulo.appendChild(criaH1);
}
criaHeader();

function criaCores() {
  const cores = ['black', 'red', 'pink', 'green'];
  const quadrados = document.querySelectorAll('.color');
  for (let index = 0; index < cores.length; index += 1) {
    quadrados[index].style.backgroundColor = cores[index];
  }
}
criaCores();

function criaQuadro() {
  const localizaDiv = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const criaUl = document.createElement('ul');
    criaUl.className = 'uls';
    localizaDiv.appendChild(criaUl);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const localizaUl = document.querySelectorAll('.uls')[index];
      const criaLi = document.createElement('li');
      criaLi.className = 'pixel';
      localizaUl.appendChild(criaLi);
    }
  }
}
criaQuadro();

function trocaClass(event) {
  const pegaClass = document.querySelector('.selected');
  pegaClass.classList.remove('selected');
  event.target.classList.add('selected');
}

const black = document.getElementById('black');
const red = document.getElementById('red');
const pink = document.getElementById('pink');
const green = document.getElementById('green');

black.addEventListener('click', trocaClass);
red.addEventListener('click', trocaClass);
pink.addEventListener('click', trocaClass);
green.addEventListener('click', trocaClass);

function trocaCor() {
  const pixel = document.getElementById('pixel-board');
  pixel.addEventListener('click', (event) => {
    if (event.target.className === 'pixel') {
      const corAtual = document.querySelector('.selected').id;
      const corSelecionada = event.target;
      corSelecionada.style.backgroundColor = corAtual;
    }
  });
}
trocaCor();

function limpaQuadro() {
  const pegaButton = document.getElementById('clear-board');
  const pegaPixels = document.querySelectorAll('.pixel');
  pegaButton.addEventListener('click', function () {
    for (let index = 0; index < pegaPixels.length; index += 1) {
      pegaPixels[index].style.backgroundColor = 'white';
    }
  });
}
limpaQuadro();
