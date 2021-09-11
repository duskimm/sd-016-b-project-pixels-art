// Challenge 1

function ramdomColors() {
  const otherColors = Math.floor(Math.random() * 255);
  const otherColors1 = Math.floor(Math.random() * 255);
  const otherColors2 = Math.floor(Math.random() * 255);
  const palleteColor = `rgb(${otherColors}, ${otherColors1}, ${otherColors2})`;

  return palleteColor;
}

function colorAtribution () {
  const deposit = document.querySelectorAll('.color:not(:first-child)');
  for (let color of deposit) {
    color.style.backgroundColor = ramdomColors();
  }
}

colorAtribution();

// Challenge 4, 5, 6 - Function of the grid.

const proportion = 5;
const elementChild = document.querySelector('#pixel-board');

function creationtLines(numberOfBoxes) {
  for (let index = 0; index < numberOfBoxes; index += 1) {
    const lines = document.createElement('div');
    elementChild.appendChild(lines);
    for (let lineColumn = 0; lineColumn < numberOfBoxes; lineColumn += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      lines.appendChild(column);
    }
  }
}

creationtLines(proportion);

// Challenge 7

function colorSpill() {
  let pixels = document.querySelectorAll('.pixel');
  let colors = document.querySelectorAll('.color');

  for (let color of colors){
    color.addEventListener('click', function(event) {
      let pointedColor = document.querySelector('.selected');
      if (pointedColor !== null) {
        pointedColor.classList.remove('selected');
      }
        event.target.classList.add('selected');
    });
  }
  for (let eachPixel of pixels) {
    eachPixel.addEventListener('click', function(event){
      let selectedColor = document.querySelector('.selected');
      eachPixel.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
      
    })
  }
}

colorSpill();

window.onload = function() {
  const pixelBoard = document.querySelector('.pixel');

  pixelBoard.backgroundColor = 'white';
};

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


