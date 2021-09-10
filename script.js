let colorSelected = document.querySelectorAll('#color-palette .color');
let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearAll);

const pixelBoard = document.getElementById('pixel-board');
let color = 'black';

function createPixelBoxes(size) {
  for (let index = 0; index < size; index += 1) {
    let box = document.createElement('div');
    box.className = 'pixel';
    pixelBoard.append(box);
  }
}
createPixelBoxes(25);

const pixelBox = document.querySelectorAll('.pixel');
// console.log(pixelBox);

/**
 * Função que pinta os pixels
 */
function paintsElement(event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = color;
  }
}

for (let index = 0; index < pixelBox.length; index += 1) {
  pixelBox[index].addEventListener('click', paintsElement);
}

for (let index = 0; index < colorSelected.length; index += 1) {
  colorSelected[index].addEventListener('click', chosenColor);
  console.log(color);
}

function chosenColor(event) {
  color = event.target.id;
}

function clearAll() {
  // Reseta a cor de fundo de todos os pixels
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].style.backgroundColor = 'white';
  }
  // Reseta a cor selected para black
  for (let index = 0; index < colorSelected.length; index += 1) {
    if (colorSelected[index].id !== 'black') {
      colorSelected[index].classList.remove('selected');
    } else {
      colorSelected[index].className = 'color selected';
    }
  }
}
