function resetColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
}

function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (
    eventTarget.classList.contains('selected') === false &&
    eventTarget.classList.contains('color') === true
  ) {
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function paintPix(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  const bgColor = window
    .getComputedStyle(classSelected, null)
    .getPropertyValue('background-color');
  eventTarget.style.backgroundColor = bgColor;
}

function clearBoard() {
  const pixelBoa = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoa.length; i += 1) {
    pixelBoa[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

// constantes
const btnRed = document.querySelector('.color__content');
const pixelBo = document.querySelector('#pixel-board');
const btnClear = document.querySelector('#clear-board');

window.onload = resetColor;

btnRed.addEventListener('click', addClassSelected);
pixelBo.addEventListener('click', paintPix);
btnClear.addEventListener('click', clearBoard);
