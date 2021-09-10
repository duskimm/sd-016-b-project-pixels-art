let colorSelected = document.querySelectorAll('#color-palette .color');

// console.log(colorSelected);
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
  event.target.style.backgroundColor = color;
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
