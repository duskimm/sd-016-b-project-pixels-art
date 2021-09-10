const base = 5;
const elementParent = document.querySelector('#pixel-board');
const elementChild = document.querySelectorAll('.pixel');

function firstDiv(numberOfBoxes) {
  for (let index = 1; index <= numberOfBoxes; index += 1) {
    let lines = document.createElement('div');
    lines.className = 'pixel';
    elementParent.appendChild(lines);
  }
}

firstDiv(base);

function linesCreation(newDivLines) {
  for (let lineColumn = 1; lineColumn < base; lineColumn += 1) {
    if (newDivLines !== base) {
      let lines = lineColumn;
      lines = document.createElement('div');
      lines.className = 'pixel2';
      elementParent.appendChild(lines);
      break;
    }
  }
}

function creationtLines(numberOfBoxes) {
  for (let index = 1; index <= numberOfBoxes; index += 1) {
    linesCreation(numberOfBoxes[index]);
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
