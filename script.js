window.onload = function inicialColor() {
  const blackColor = document.querySelector('.color');
  blackColor.classList.add('selected');
};

const palette = document.querySelector('#color-palette');
const pixelBoardArray = document.getElementsByClassName('pixel');
const pixelBoard = document.getElementById('pixel-board');
const classLine = document.getElementsByClassName('line');

palette.addEventListener('click', (event) => {
  for (let index = 0; index < palette.children.length; index += 1) {
    palette.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});
// ajudado por Hugo Daniel.

for (let index = 0; index < pixelBoardArray.length; index += 1) {
  pixelBoardArray[index].onclick = function (event) {
    const selectedColor = document.querySelector('.selected');
    const BGColorSelected = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = BGColorSelected;
  };
}

const bigSection = document.createElement('section');
bigSection.className = 'big session';
document.body.appendChild(bigSection);
bigSection.appendChild(palette);

const newSection = document.createElement('section');
newSection.id = 'new-section';
bigSection.appendChild(newSection);

bigSection.appendChild(pixelBoard);

const botaoLimpar = document.createElement('button');
botaoLimpar.id = 'clear-board';
botaoLimpar.innerHTML = 'Limpar';
newSection.appendChild(botaoLimpar);

botaoLimpar.onclick = function clean() {
  for (let index = 0; index < pixelBoardArray.length; index += 1) {
    pixelBoardArray[index].style.backgroundColor = 'white';
  }
};

const newBoardSize = document.createElement('input');
newBoardSize.id = 'board-size';
newBoardSize.type = 'number';
newBoardSize.min = 1;
newBoardSize.max = 50;
newBoardSize.placeholder = 'defina o tamanho do quadro';
newSection.appendChild(newBoardSize);

buttonNewBoard = document.createElement('button');
buttonNewBoard.id = 'generate-board';
buttonNewBoard.innerHTML = 'VQV';
newSection.appendChild(buttonNewBoard);

buttonNewBoard.addEventListener('click', makeboard);

function makeboard() {
  if (newBoardSize.value === '') {
    window.alert('Board inválido!');
  } else {
    while (pixelBoard.firstElementChild) {
      pixelBoard.removeChild(pixelBoard.firstElementChild);
    }
    for (let i = 0; i < newBoardSize.value; i += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'line';
      pixelBoard.appendChild(newLine);
      for (let i = 0; i < newBoardSize.value; i += 1) {
        const newPixel = document.createElement('div');
        newPixel.className = 'pixel';
        newLine.appendChild(newPixel);
      }
    }
  }
}
