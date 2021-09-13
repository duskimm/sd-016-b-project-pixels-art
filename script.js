window.onload = function () {
    const firstColor = document.getElementById('black');
    firstColor.classList.add('selected');
};

const black = document.getElementById('black');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const clearButton = document.getElementById('clear-board');


const pixels = document.getElementsByClassName('pixel');
for (const pixel of pixels) {
  pixel.addEventListener('click', colorPixel);
}

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

function clearBoard(){
    const paintedPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < paintedPixels.length; i+= 1){
        paintedPixels[i].style.backgroundColor = 'white';
    }
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
orange.addEventListener('click', selectColor);
yellow.addEventListener('click', selectColor);
clearButton.addEventListener('click', clearBoard);