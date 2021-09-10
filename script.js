const getPixelBoard = document.getElementById('pixel-board');
const quantityOfPixels = 25;

function creatingPixels() {
  for (let i = 1; i <= quantityOfPixels; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    getPixelBoard.appendChild(createPixel);
  }
}

creatingPixels();
