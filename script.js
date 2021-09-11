const gBSize = 5;

const gridlocal = document.querySelector('.game-board');

function makeGrid() {
  for (let line = 0; line < gBSize; line += 1) {
    const gridLine = document.createElement('ul');
    gridLine.className = 'pixel-line';
    gridlocal.appendChild(gridLine);
    for (let bloc = 0; bloc < gBSize; bloc += 1) {
      const box = document.createElement('li');
      box.className = 'pixel';
      gridLine.appendChild(box);
    }
    const lin = document.createElement('br');
    gridLine.appendChild(lin);
  }
}

makeGrid();
