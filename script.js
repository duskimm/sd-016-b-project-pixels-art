const predefinedColors = ['black', 'red', 'blue', 'orange'];
const boardWidth = 5;
const boardHeight = 5;
const pixelSize = '5px';

function createColorPallete() {
  const container = document.createElement('div');
  container.id = 'color-palette';

  for (let color of predefinedColors) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add('color');
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
      frame.appendChild(pixel);
    }
  }

  document.body.appendChild(frame);
}

window.onload = function () {
  createColorPallete();
  createPixelBoard();
}
