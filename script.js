// Utilities

function addClass(element, className) {
  element.classList.add(className);
}

function q(params) {
  return document.body.querySelector(params);
}

function qAll(params) {
  return document.body.querySelectorAll(params);
}

function appendStuf(father, child, className, number) {
  for (let i = 0; i < number; i += 1) {
    const childElement = document.createElement(child);
    father.appendChild(childElement).classList.add(className);
  }
}

// Task 2 functions

const usedColors = ['black', 'rgb(235,242,250)', 'rgb(103,148,54)', 'rgb(165,190,0)'];
const colors = qAll('.color');

for (let i = 0; i < colors.length; i += 1) {
  colors[i].style.backgroundColor = usedColors[i];
}

// Task 4 and 5 functions
let n = 5;

function generateBoard(num) {
  const pixelBoard = q('#pixel-board');
  appendStuf(pixelBoard, 'div', 'pixelLine', num);

  const pixelLines = qAll('.pixelLine');
  for (let i = 0; i < pixelLines.length; i += 1) {
    appendStuf(pixelLines[i], 'div', 'pixel', num);
  }

  const boardWidth = 40 * num + (num) * 2;
  pixelBoard.style.width = `${boardWidth}px`;
}

generateBoard(n);

// task 6 functions
addClass(colors[0], 'selected');

// task 7 functions

function resetClass() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
}

function selectedClasses(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', () => {
      resetClass();
      const stuf = array[i];
      stuf.className += ' selected';
    });
  }
}

selectedClasses(colors);

// task 8 functions
const pixel = qAll('.pixel');

function selectPixel(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', () => {
      const stuf = array[i];
      const selectedColor = q('.selected').style.backgroundColor;
      stuf.style.backgroundColor = selectedColor;
    });
  }
}

selectPixel(pixel);

// task 9 functions
q('#clear-board').addEventListener('click', () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

// task 10
function deleteElements(element) {
  // Referência para limpar um nodo usando o DOM: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  const node = q(element);
  node.innerHTML = '';
}

function resetBoard(num) {
  deleteElements('#pixel-board');
  generateBoard(num);
}

q('#generate-board').addEventListener('click', () => {
  n = q('#board-size').value;
  if (n === '') {
    alert('Board inválido!');
  } else if (n < 5) {
    n = 5;
    resetBoard(n);
  } else if (n > 50) {
    n = 50;
    resetBoard(n);
  } else {
    resetBoard(n);
  }
});
