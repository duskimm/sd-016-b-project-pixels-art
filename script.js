function createPixelBoard() {
  let pixelBoard = document.createElement('section');
  pixelBoard.id = 'pixel-board';
  document.body.appendChild(pixelBoard);
  pixelBoard.style.height = '210px';
  pixelBoard.style.width = '210px';
}
createPixelBoard(5);

function createPixel(n) {
  let pixelBoard = document.getElementById('pixel-board');

  for(let index = 0; index < n; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
createPixel(25);
