const pixelBoard = document.getElementById('pixel-board');
let pixels;

function createBoard(grids) {
  for (let index = 1; index <= grids; index += 1) {
    pixels = document.createElement('div');
    pixels.classList.add('pixel');
    pixelBoard.appendChild(pixels);
  }
}

createBoardRow(25);
