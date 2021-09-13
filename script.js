function generatePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';

  return pixel;
}

function generateRow(dimension) {
  const row = document.createElement('div');
  row.className = 'pixel-board-row';

  for (let counter = 0; counter < dimension; counter += 1) {
    row.appendChild(generatePixel());
  }
  return row;
}

function generatePixelBoard(dimension) {
  const pixelBoardContainer = document.querySelector('#pixel-board');

  for (let counter = 0; counter < dimension; counter += 1) {
    pixelBoardContainer.appendChild(generateRow(dimension));
  }
}

generatePixelBoard(5);