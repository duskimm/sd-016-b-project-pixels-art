/* Constantes */
const cabecalho = document.createElement('header');
const h1 = document.createElement('h1');
const paletaDeCores = document.createElement('section');
const cores = document.getElementsByClassName('color');

/* Primeira cor */
const corPreta = () => {
  let cor1 = document.querySelectorAll('.color');
  cor1[0].style.backgroundColor = 'black';
  cor1[0].classList.add('selected');
}

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
/* paletaDeCores.style.backgroundColor = 'black'; */
paletaDeCores.style.height = '40px';
paletaDeCores.id = 'color-palette';
paletaDeCores.classList.add('container');
paletaDeCores.style.justifyContent = 'center';


const generateColors = () => {
  for (let index = 0; index < 4; index += 1) {
    const divColor = document.createElement('div');
    paletaDeCores.appendChild(divColor);
    divColor.classList.add('color');
    divColor.style.border = '1px solid black';
    
  }
}
generateColors();

const styleColors = () => {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].style.width = '40px';
    cores[index].style.height = '40px';
    cores[index].style.margin = '5px';
    cores[index].style.borderRadius = '45px';
  }
}
styleColors();

const generateRandomColor = () => {
  for (let index = 1; index < cores.length; index += 1) {
    let r = Math.floor(Math.random() * (255));
    let g = Math.floor(Math.random() * (255));
    let b = Math.floor(Math.random() * (255));
    let rgb = `rgb(${r}, ${g}, ${b})`;
    cores[index].style.backgroundColor = rgb;
  }  
}
generateRandomColor();
window.onload = corPreta();