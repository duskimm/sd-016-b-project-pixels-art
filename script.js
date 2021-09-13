/* eslint-disable no-restricted-syntax */
// Challenge 1

function ramdomColors() {
  const otherColors = Math.floor(Math.random() * 255);
  const otherColors1 = Math.floor(Math.random() * 255);
  const otherColors2 = Math.floor(Math.random() * 255);
  const paletteColor = `rgb(${otherColors}, ${otherColors1}, ${otherColors2})`;

  return paletteColor;
}

function colorAtribution() {
  const deposit = document.querySelectorAll('.color:not(:first-child)');
  for (let index = 0; index < deposit.length; index += 1) {
    deposit[index].style.backgroundColor = ramdomColors();
  }
}
colorAtribution();

// Challenge 4, 5, 6 - Function of the grid.

const elementChild = document.querySelector('#pixel-board');

function creationtLines(numberOfBoxes) {
  for (let index = 0; index < numberOfBoxes; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'line';
    elementChild.appendChild(lines);
    for (let lineColumn = 0; lineColumn < numberOfBoxes; lineColumn += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      lines.appendChild(column);
    }
  }
}

// Challenge 10
function createInputBtn() {
  const placeInputBtn = document.querySelector('.input');
  const createInput = document.createElement('input');
  const createButton = document.createElement('button');

  createInput.type = 'number';
  createInput.min = '1';
  createInput.id = 'board-size';
  createInput.placeholder = 'insira um número entre 5 e 50';
  createInput.oninput = 'this.value = Math.abs(this.value)';

  createButton.id = 'generate-board';
  createButton.innerHTML = 'VQV';

  placeInputBtn.appendChild(createInput);
  placeInputBtn.appendChild(createButton);
}
createInputBtn();

function setBoardSize() {
  const boardValue = document.querySelector('#generate-board');
  creationtLines(5);

  boardValue.addEventListener('click', () => {
    const getValue = document.querySelector('#board-size').value;
    let verifyValue = getValue;
    if (verifyValue === '') {
      alert('Board inválido!');
    } else if (verifyValue < 5) {
      verifyValue = 5;
    } else if (verifyValue > 50) {
      verifyValue = 50;
    }
    elementChild.innerHTML = '';
    creationtLines(verifyValue);
  });
}
setBoardSize();

// Challenge 7 and 8.

function colorSpill() {
  const pixels = document.querySelectorAll('.pixel');
  const colors = document.querySelectorAll('.color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      const pointedColor = document.querySelector('.selected');
      if (pointedColor !== null) {
        pointedColor.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (e) => {
      const selectedColor = document.querySelector('.selected');
      e.target.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
    });
  }
}

colorSpill();

function clearButtonCreation() {
  const createButton = document.querySelector('.clear-board');
  const existenceButton = document.createElement('button');

  existenceButton.innerHTML = 'Limpar';
  existenceButton.id = 'clear-board';
  createButton.appendChild(existenceButton);
}
clearButtonCreation();

// Challenge 9

function clearButtonEvent() {
  const btnActionClean = document.querySelector('#clear-board');

  btnActionClean.addEventListener('click', () => {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelBoard.length; index += 0) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  });
}
clearButtonEvent();
