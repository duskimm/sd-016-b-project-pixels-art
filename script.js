// function addClassSelected(event) {
//   event.target.classList.add('selected');
// }

function resetColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
}

window.onload = resetColor;
