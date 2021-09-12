const colors = document.getElementsByClassName('color');
// Função que adiociona e remove a class 'selected'
function selectColor(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}
