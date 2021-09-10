// Utilities

/* function addClass(element, className) {
  element.classList.add(className);
} */

/*
function q(params) {
  return document.body.querySelector(params);
}
*/

function qAll(params) {
  return document.body.querySelectorAll(params);
}

// Task 2 functions

const usedColors = ['rgb(66,122,161)', 'rgb(235,242,250)', 'rgb(103,148,54)', 'rgb(165,190,0)'];
const colors = qAll('.color');

for (let i = 0; i < colors.length; i += 1) {
  colors[i].style.backgroundColor = usedColors[i];
}
