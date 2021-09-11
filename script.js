const proportion = 5;
const elementParent = document.querySelector('#pixel-board');

function firstDiv(numberOfBoxes) {
  for (let index = 1; index <= numberOfBoxes; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'pixel';
    elementParent.appendChild(lines);
  }
}

firstDiv(proportion);

const elementChild = document.querySelectorAll('.pixel');

function creationtLines(numberOfBoxes) {
  for (let index = 0; index < numberOfBoxes.length; index += 1) {
    for (let lineColumn = 0; lineColumn < numberOfBoxes.length; lineColumn += 1) {
      const lines = document.createElement('div');
      lines.className = 'pixel';
      numberOfBoxes[lineColumn].appendChild(lines);
    }
  }
}

creationtLines(elementChild);

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
