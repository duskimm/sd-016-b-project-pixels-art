window.onload = function startBlack() {
  const createClass = document.createElement('class');
  createClass.className = 'selected';
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
};

let colorBlack = document.querySelector('.colorBlack');
let colorBlue = document.querySelector('.colorBlue');
let colorRed = document.querySelector('.colorRed');
let colorGreen = document.querySelector('.colorGreen');

colorBlack.addEventListener('click', clickBlack);
function clickBlack() {
  colorBlack.classList.add('selected');
  colorBlue.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
}

colorBlue.addEventListener('click', clickBlue);
function clickBlue() {
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
}

colorRed.addEventListener('click', clickRed);
function clickRed() {
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorRed.classList.add('selected');
  colorGreen.classList.remove('selected');
}

colorGreen.addEventListener('click', clickGreen);
function clickGreen() {
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.add('selected');
}