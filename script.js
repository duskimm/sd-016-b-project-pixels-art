const pixelBoard = document.getElementById('pixel-board');
let pixels;

function createBoardColumn(grids) {
  for (let indexColumn = 1; indexColumn <= grids; indexColumn += 1) {
    const pixelColumn = document.createElement('div');
    pixelColumn.classList.add('pixel');
    pixels.appendChild(pixelColumn);
  }
}

function createBoardRow(grids) {
  for (let indexRow = 1; indexRow <= grids; indexRow += 1) {
    pixels = document.createElement('div');
    pixels.classList.add('pixel-line');
    pixelBoard.appendChild(pixels);
    createBoardColumn(grids);
  }
}

createBoardRow(5);
