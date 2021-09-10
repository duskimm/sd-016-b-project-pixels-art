function createPixel(className, parent) {
  let newPixel = document.createElement('div');
  newPixel.className = className;
  parent.appendChild(newPixel);
}

let lines = document.getElementsByClassName('pixel-line');

for (let index = 0; index < lines.length; index += 1) {
  for (let i = 1; i <= 5; i += 1) {
    createPixel('pixel', lines[index]);
  }
}

let color = document.getElementsByClassName('color');

function removeSelected() {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
}

function addSelected(event) {
  event.target.classList.add('selected');
}

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', removeSelected);
  color[index].addEventListener('click', addSelected);
}
