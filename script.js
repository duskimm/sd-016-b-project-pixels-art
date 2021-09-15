window.onload = function startBlack() {
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
};

function changeSelected() {
  const paletteColor = document.querySelector('#color-palette');
  paletteColor.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

changeSelected();

/* Nesse exercicio tive a ajuda do Hugo Daniel para resolver. */
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', (event) => {
  const event1 = event.target;
  const selected = document.querySelector('.selected');
  if (event.target.classList.contains('pixel')) {
    event1.style.backgroundColor = window
      .getComputedStyle(selected, null)
      .getPropertyValue('background-color');
  }
});

function creationButton() {
  const buttonCreate = document.getElementById('button-create');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  buttonCreate.append(button);
  button.addEventListener('click', () => {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

creationButton();
