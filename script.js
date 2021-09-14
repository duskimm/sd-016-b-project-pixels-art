const colorsDiv = document.querySelector('#color-palette');
const colorsChildren = colorsDiv.children;
const pixelsDiv = document.querySelector('#pixel-board');
const pixelsChildren = pixelsDiv.children;
const clearButton = document.getElementById('clear-board');
let color = 'black';

function createColors() {
  const numberOfColors = 4;
  const colors = ['black', 'red', 'blue', 'green'];
  let div;
  for (let index = 0; index < numberOfColors; index += 1) {
    div = document.createElement('div');
    div.classList.add('color');
    colorsDiv.appendChild(div);
    colorsDiv.children[index].style.backgroundColor = (colors[index]);
  }
  colorsChildren[0].classList.add('selected');
}
function selectColor(listenerColor) {
  for (let index = 0; index < colorsChildren.length; index += 1) {
    colorsChildren[index].classList.remove('selected');
  }
  listenerColor.target.classList.add('selected');
  color = listenerColor.target.style.backgroundColor;
}
function listenerColor() {
  for (let index = 0; index < colorsChildren.length; index += 1) {
    colorsChildren[index].addEventListener('click', selectColor);
  }
}
function createPixel() {
  const pixelNumber = 5;
  let div;
  let count = 0;
  let countId = 0;
  for (let index1 = 0; index1 < pixelNumber; index1 += 1) {
    div = document.createElement('div');
    div.classList.add('pixels-lines');
    pixelsDiv.appendChild(div);
    for (let index = 0; index < pixelNumber; index += 1) {
      div = document.createElement('div');
      div.classList.add('pixel');
      pixelsChildren[index1].appendChild(div);
      const pix = document.querySelectorAll('.pixel');
      pix[count].style.backgroundColor = 'white';
      pix[count].id = countId + 1;
      count += 1; countId += 1;
    }
  }
}
function clearBoard() {
  for (let index = 0; index < pixelsChildren.length; index += 1) {
    for (let index1 = 0; index1 < pixelsChildren.length; index1 += 1) {
      pixelsChildren[index].children[index1].style.backgroundColor = 'white';
    }
  }
}
clearButton.addEventListener('click', clearBoard);
function paintPixel() {
  const totalPixel = pixelsChildren.length * pixelsChildren.length;
  let countId = 1;
  for (let index = 0; index < totalPixel; index += 1) {
    const ids = document.getElementById(countId);
    ids.addEventListener('click', function SetColor() {
      ids.style.backgroundColor = color;
    });
    countId += 1;
  }
}

window.onload = function start() {
  createColors();
  createPixel();
  listenerColor();
  paintPixel();
};
