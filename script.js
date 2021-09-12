window.onload = function startBlack() {
  const createClass = document.createElement('class');
  createClass.className = 'selected';
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
};

const colorBlack = document.querySelector('#colorBlack');
const colorBlue = document.querySelector('#colorBlue');
const colorRed = document.querySelector('#colorRed');
const colorGreen = document.querySelector('#colorGreen');

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
  colorBlue.classList.add('selected');
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
