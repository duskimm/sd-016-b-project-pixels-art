const colorSelected = document.querySelectorAll('#color-palette .color');
const btnClear = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
let color = 'black';
btnClear.addEventListener('click', clearAll);

function createPixelBoxes(size) {
  for (let index = 0; index < size; index += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    pixelBoard.append(box);
  }
}
createPixelBoxes(25);

const pixelBox = document.querySelectorAll('.pixel');
// console.log(pixelBox);

/**
 *Reseta os pixels
 */
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

/**
 * Função que pinta os pixels
 */
function paintsElement(event) {
  if (event.target.className === 'pixel') {
    const colorToPaint = event.target;
    colorToPaint.style.backgroundColor = color;
  }
}

/**
 *Adiciona eventos a todos os pixels
 */
for (let index = 0; index < pixelBox.length; index += 1) {
  pixelBox[index].addEventListener('click', paintsElement);
}

/**
 * Seta a cor escolhida e controla com a classe selected
 */
function chosenColor(event) {
  color = event.target.id;
  for (let index = 0; index < colorSelected.length; index += 1) {
    if (color === colorSelected[index].id) {
      colorSelected[index].className = 'color selected';
    } else {
      colorSelected[index].className = 'color';
    }
  }
}

for (let index = 0; index < colorSelected.length; index += 1) {
  colorSelected[index].addEventListener('click', chosenColor);
  console.log(color);
}
