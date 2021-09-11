const predefinedColors = ['black'];
const pixelSize = '40px'

let selectedColor;
let boardDimension;

window.onload = function () {
  for (let i = 1; i <= 3; i++) {
    predefinedColors.push(`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`)
  }
  selectedColor = predefinedColors[0];

  boardDimension = validateDimension(localStorage.getItem('dimension'));

  window.addEventListener('alert', function (msg) {
    console.log(msg)
  })

  setupColorButtons();
  setupClearButton();
  setupResizeButton();
  createPixelBoard();
}

function setupColorButtons() {
  const colorContainer = document.querySelector('#color-palette');
  colorContainer.addEventListener('click', onSelectNewColor);

  for (let colorName of predefinedColors) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = colorName;
    colorDiv.classList.add('color');
    colorDiv.setAttribute('colorName', colorName);

    if (colorName == selectedColor) {
      colorDiv.classList.add('selected');
    }

    colorContainer.appendChild(colorDiv);
  }
}

function onSelectNewColor(event) {
  const selectedElement = document.querySelector('.selected');

  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }

  event.target.classList.add('selected');
  selectedColor = event.target.getAttribute('colorName');

  localStorage.setItem('selectedColor', event.target.getAttribute('colorName'));
}

function setupClearButton() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    for (let pixel of document.querySelectorAll('.pixel')) {
      pixel.style.backgroundColor = 'white';
    }
  })
}

function setupResizeButton() {
  const input = document.querySelector('#board-size');

  const button = document.querySelector('#generate-board');

  button.addEventListener('click', function () {
    if (input.value === '') {
      return alert('Board inválido!');
    }

    boardDimension = validateDimension(input.value);

    board = document.querySelector('#pixel-board');

    for (let pixel of document.querySelectorAll('.pixel')) {
      pixel.parentElement.removeChild(pixel);
    }

    createPixelBoard();
  })
}

function createSinglePixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');

  pixel.style.width = pixelSize;
  pixel.style.height = pixelSize;
  pixel.style.backgroundColor = 'white';

  return pixel
}

function createPixelBoard() {
  const board = document.querySelector('#pixel-board');
  board.onclick = onClickPixel;

  board.style.width = parseInt(pixelSize) * boardDimension + 'px';
  board.style.height = parseInt(pixelSize) * boardDimension + 'px';

  for (let x = 1; x <= boardDimension; x++) {
    for (let y = 1; y <= boardDimension; y++) {
      const pixel = createSinglePixel();
      board.appendChild(pixel);
    }
  }
}

function onClickPixel(event) {
  event.target.style.backgroundColor = selectedColor;
}
