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

boardElements.addEventListener('click', presetColor);
boardElements.addEventListener('dblclick', clearPixel);

function clearPixel(event) {
  event.target.style.backgroundColor = 'white';
}

function presetColor(event) {
  event.target.style.backgroundColor = 'black';
}
