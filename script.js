const predefinedColors = ['black', 'red', 'blue', 'orange'];
let selectedColor = "black";
const boardWidth = 5;
const boardHeight = 5;

function createColorPallete() {
  const container = document.createElement('div');
  container.id = 'color-palette';

  for (let color of predefinedColors) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add('color');

    if (color === selectedColor) {
      colorDiv.classList.add('selected');
    }

    colorDiv.addEventListener('click', function (event) {
      const previousSelected = document.querySelector('.selected');

      if (previousSelected) {
        previousSelected.classList.remove('selected');
      }

      colorDiv.classList.add('selected');

      selectedColor = color;
    })

    container.appendChild(colorDiv);
  }

  document.body.appendChild(container);
}

function createPixelBoard() {
  const frame = document.createElement('div');
  frame.id = 'pixel-board';

  for (let x = 1; x <= boardWidth; x++) {
    for (let y = 1; y <= boardHeight; y++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');

      pixel.addEventListener('click', function (event) {
        const appliedStyles = window.getComputedStyle(pixel);
        if (selectedColor != appliedStyles.backgroundColor) {
          pixel.style.backgroundColor = selectedColor;
        } else {
          pixel.style.backgroundColor = white;
        }
      })

      frame.appendChild(pixel);
    }
  }

  document.body.appendChild(frame);
}

function createClearButton() {
  const button = document.createElement('button');
  button.id = "clear-board";
  button.innerText = 'Limpar';

  button.addEventListener('click', function (event) {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
  })

  document.body.appendChild(button);
}

window.onload = function () {
  createColorPallete();
  createClearButton();
  createPixelBoard();
}
