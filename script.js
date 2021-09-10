// Utilities

/* function addClass(element, className) {
  element.classList.add(className);
} */

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

// Task 4 functions
const n = 5;
const pixerBoard = q('#pixel-board');
appendStuf(pixerBoard, 'div', 'pixelLine', n);

const pixelLines = qAll('.pixelLine');
for (let i = 0; i < pixelLines.length; i += 1) {
  appendStuf(pixelLines[i], 'div', 'pixel', n);
}

// task 5 functions
const pixelBoard = q('#pixel-board');
const boardWidth = 40 * n + (n) * 2;
pixelBoard.style.width = `${boardWidth}px`;
