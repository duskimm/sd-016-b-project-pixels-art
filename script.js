const firstColor = document.querySelector('#black');
firstColor.classList.add('selected');

const colors = document.querySelectorAll('.color')

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', checkColor);
}
  function checkColor(color) {
  for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove('selected');
  }
  color.target.classList.add('selected')
}

  