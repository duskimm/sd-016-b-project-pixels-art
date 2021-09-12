/* eslint-disable no-restricted-syntax */
// Challenge 1

function ramdomColors() {
  const otherColors = Math.floor(Math.random() * 255);
  const otherColors1 = Math.floor(Math.random() * 255);
  const otherColors2 = Math.floor(Math.random() * 255);
  const palleteColor = `rgb(${otherColors}, ${otherColors1}, ${otherColors2})`;

  return palleteColor;
}

function colorAtribution() {
  const deposit = document.querySelectorAll('.color:not(:first-child)');
  for (const color of deposit) {
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

// Challenge 7 and 8.

function colorSpill() {
  const pixels = document.querySelectorAll('.pixel');
  const colors = document.querySelectorAll('.color');

  for (const color of colors) {
    color.addEventListener('click', (event) => {
      const pointedColor = document.querySelector('.selected');
      if (pointedColor !== null) {
        pointedColor.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  for (const eachPixel of pixels) {
    eachPixel.addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
    });
  }
}

colorSpill();

function clearButtonCreation() {
  const createButton = document.querySelector('#color-palette');
  const existenceButton = document.createElement('button');

  existenceButton.innerHTML = 'Limpar';
  existenceButton.id = 'clear-board';
  createButton.appendChild(existenceButton);
}
clearButtonCreation();

// Challenge 9

function clearButtonEvent() {
  const btnActionClean = document.querySelector('.clear-board');

  btnActionClean.addEventListener('click', () => {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (const pixels of pixelBoard) {
      pixels.style.backgroundColor = 'white';
    }
  });
}
clearButtonEvent();

// window.onload = function () {
//   const pixelBoard = document.querySelector('.pixel');

//   pixelBoard.backgroundColor = 'white';
// };


