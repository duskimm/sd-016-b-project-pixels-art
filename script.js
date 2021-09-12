const lines = 5;
const squareDivs = document.getElementById('pixel-board');

function SquarePalette() {
  for (let lineIdx = 0; lineIdx < lines; lineIdx += 1) {
    for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
      let square = document.createElement('div');
      square.className = 'pixel';
      squareDivs.appendChild(square);
    }
  }
}
SquarePalette();
