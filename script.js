const pixelLine = document.querySelectorAll('.line');

function createPixelLine(divLine) {
  for (let index = 0; index < 5; index += 1) {
    const pixelElement = document.createElement('div');
    pixelElement.classList = 'pixel';
    divLine.appendChild(pixelElement);
  }
}

function createPixelBoard(line) {
  for (let index = 0; index < 5; index += 1) {
    createPixelLine(line[index]);
  }
}
createPixelBoard(pixelLine);
