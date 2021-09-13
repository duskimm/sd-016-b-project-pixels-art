window.onload = function () {
//Faz a cor preta estar selecionada ao carregar a página
    const firstColor = document.getElementById('black');
    firstColor.classList.add('selected');
};

const pink = document.getElementById('pink');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const white = document.getElementById('white');
const black = document.getElementById('black');

const pixels = document.getElementsByClassName('pixel');
for (const pixel of pixels) {
  pixel.addEventListener('click', colorPixel);
}

pink.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
orange.addEventListener('click', selectColor);
yellow.addEventListener('click', selectColor);
white.addEventListener('click', selectColor);
black.addEventListener('click', selectColor);

function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}

function colorPixel(event) {
    const selected = document.querySelector('.selected');
    const color = window.getComputedStyle(selected).backgroundColor;
    const pixel = event.target;
    pixel.style.backgroundColor = color;
}