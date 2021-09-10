function createPixel(className, parent) {
  let newPixel = document.createElement('div');
  newPixel.className = className;
  parent.appendChild(newPixel);
}

let lines = document.getElementsByClassName('pixel-line');

for (let index = 0; index < lines.length; index += 1) {
  for (let i = 1; i <= 5; i += 1) {
    createPixel('pixel', lines[index]);
  }
}

let colors = document.getElementsByClassName('color');

function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function addSelected(event) {
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', removeSelected);
  colors[index].addEventListener('click', addSelected);
}

let pixels = document.getElementsByClassName('pixel');

function addColor(event) {
  let selectedItem = document.querySelector('.selected');
  let selectedColor = window.getComputedStyle(selectedItem).getPropertyValue('background-color');
  event.target.style.backgroundColor = selectedColor;
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', addColor);
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

let clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', clearBoard);