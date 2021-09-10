const color = document.querySelectorAll('.color');

function selectedColor(event) {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }

  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', selectedColor);
  }