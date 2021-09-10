// function addClassSelected(event) {
//   event.target.classList.add('selected');
// }

function resetColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
}

window.onload = resetColor;

function test1() {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
}

function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (eventTarget.classList.contains('selected') === false) {
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

const btnRed = document.querySelector('.color__content');
btnRed.addEventListener('click', addClassSelected);
