
// Challenge 4 - Function of the grid.

const proportion = 5;
const elementChild = document.querySelector('#pixel-board');

function creationtLines(numberOfBoxes) {
  for (let index = 0; index < numberOfBoxes; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'pixel';
    elementChild.appendChild(lines);
    for (let lineColumn = 0; lineColumn < numberOfBoxes; lineColumn += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      lines.appendChild(column);
    }
  }
}

creationtLines(proportion);

window.onload = function() {
  const pixelBoard = document.querySelector('.pixel');

  pixelBoard.backgroundColor = 'white';

}

// function hightNumbered(boxNumbered) {
//   for (let index = 1; index <= base; index += 1) {
//     let pixelCreate = document.createElement('div');
//     pixelCreate.className = 'pixel';
//     elementChild.appendchild(pixelCreate);
//   }
// }

// function pixelBoard(boxNumbered) {
//   for (let index = 0; index < boxNumbered.length; index += 1) {
//     hightNumbered(boxNumbered[index]);
//   }
// }

// pixelBoard(elementChild);

// function ramdomColors () {
//   let otherColors = Math.floor(Math.random() * 255);
//   let otherColors1 = Math.floor(Math.random() * 255);
//   let otherColors2 = Math.floor(Math.random() * 255);
//   let paletColor = `rgb(${otherColors}, ${otherColors1}, ${otherColors2})`;
