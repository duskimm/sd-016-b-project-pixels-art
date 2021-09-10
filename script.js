/* Constantes */
const cabecalho = document.createElement('header');
const h1 = document.createElement('h1');
const paletaDeCores = document.createElement('section');
const cores = document.getElementsByClassName('color');
const pixelBoard = document.createElement('div');
const pixels = document.getElementsByClassName('pixel');

document.body.style.backgroundColor = 'coral'
/* Primeira cor */
const corPreta = () => {
  const cor1 = document.querySelectorAll('.color');
  cor1[0].style.backgroundColor = 'black';
  cor1[0].classList.add('selected');
};

/* Cabeçalho e Título */
document.body.appendChild(cabecalho);
cabecalho.appendChild(h1);
h1.innerText = 'Paleta de Cores';
h1.id = 'title';
h1.style.textAlign = 'center';
h1.style.padding = '30px';
cabecalho.style.backgroundColor = 'green';
cabecalho.style.marginBottom = '40px';

/* Paleta de cores */
document.body.appendChild(paletaDeCores);
paletaDeCores.style.width = '40%';
paletaDeCores.style.height = '40px';
paletaDeCores.style.margin = 'auto';
paletaDeCores.style.justifyContent = 'center';
paletaDeCores.id = 'color-palette';
paletaDeCores.classList.add('container');

const generateColors = () => {
  for (let index = 0; index < 4; index += 1) {
    const divColor = document.createElement('div');
    paletaDeCores.appendChild(divColor);
    divColor.classList.add('color');
    divColor.style.border = '1px solid black';
  }
};
generateColors();

const styleColors = () => {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].style.width = '40px';
    cores[index].style.height = '40px';
    cores[index].style.margin = '5px';
    cores[index].style.borderRadius = '45px';
  }
};
styleColors();

const generateRandomColor = () => {
  for (let index = 1; index < cores.length; index += 1) {
    const r = Math.floor(Math.random() * (255));
    const g = Math.floor(Math.random() * (255));
    const b = Math.floor(Math.random() * (255));
    const rgb = `rgb(${r}, ${g}, ${b})`;
    cores[index].style.backgroundColor = rgb;
  }
};
generateRandomColor();

/* Quadro de pixels */
document.body.appendChild(pixelBoard);
pixelBoard.id = 'pixel-board';
pixelBoard.classList.add('container');
pixelBoard.style.maxWidth = '200px';
pixelBoard.style.height = '200px';
pixelBoard.style.margin = '100px auto';
pixelBoard.style.justifyContent = 'center';
pixelBoard.style.flexWrap = 'wrap';

const generateBoard = () => {
  for (let index = 0; index < 25; index += 1) {
    const divPixels = document.createElement('div');
    pixelBoard.appendChild(divPixels);
    divPixels.classList.add('pixel');
    divPixels.style.border = '1px solid black';
  }
};
generateBoard();

const stylePixels = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.width = '40px';
    pixels[index].style.height = '40px';
    pixels[index].style.backgroundColor = 'white';
  }
};
stylePixels();
window.onload = corPreta;
