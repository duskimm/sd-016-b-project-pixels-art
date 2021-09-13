//board
const numberPixels = 5;
const linePixel = document.querySelectorAll('.line-pixel');
const boardElements = document.getElementById('pixel-board');

creatBoard(linePixel);

function creatBoard(linePixel) {
  for (let index = 0; index < linePixel.length; index += 1) {
    createLine(linePixel[index]);
  }
}

function createLine(line) {
  for (let index = 1; index <= numberPixels; index += 1) {
    let pixel = createPixel('pixel');
    line.appendChild(pixel);
  }
}

function createPixel(classe) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}

//colors
const colorPallete = document.getElementById('color-palette');
const colorType = document.getElementsByClassName('color');
colorType[0].style.backgroundColor = 'black';
colorType[1].style.backgroundColor = 'rgb(154, 49, 29)';
colorType[2].style.backgroundColor = 'rgb(247, 136, 14)';
colorType[3].style.backgroundColor = 'rgb(77, 255, 0)';

//preset pincel onload (black)
boardElements.addEventListener('click', function(event) {
  if (divTarget === '' ) {
    event.target.style.backgroundColor = 'black';
  }
});

//pincel select and remove
let divTarget = '';
let pincelColor  = '';
colorPallete.addEventListener('click', selectColor);
boardElements.addEventListener('click', pincel);
boardElements.addEventListener('dblclick', eraser)


function selectColor(event) {
  divTarget = event.target;
  pincelColor = divTarget.style.backgroundColor;
  console.log(divTarget);
}

function pincel(event) {
  if (divTarget !== '') {
    event.target.style.backgroundColor = pincelColor;
    console.log(event.target);
  }
}

function eraser(event) {
  event.target.style.backgroundColor = 'white';
  console.log(event.target);
}