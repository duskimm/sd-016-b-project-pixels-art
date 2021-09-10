// Cria os pixels
function createDiv(className, parent) {
  let newPixel = document.createElement('div');
  newPixel.className = className;
  parent.appendChild(newPixel);
}

let generateButton = document.getElementById('generate-board');

let pixelBoard = document.getElementById('pixel-board');

let lines = document.getElementsByClassName('pixel-line');

// função que cria os pixels de acordo com o input recebido
function generateLines(input) {
  for (let index = 1; index <= input; index += 1) {
    createDiv('pixel-line', pixelBoard);
  }

  document.getElementById('board-size').value = '';
}

function generatePixels() {
  for (let index = 0; index < lines.length; index += 1) {
    for (let i = 1; i <= lines.length; i += 1) {
      createDiv('pixel', lines[index]);
    }
  }
}

// Gera os pixels iniciais
generatePixels();

// Função que checa se já existe um quadro de pixels
function checkBoard() {
  let input = document.getElementById('board-size').value;

  if (input === '') {
    alert('Board inválido!');
  } else if (parseInt(input) < 5) {
    pixelBoard.innerHTML = '';
    generateLines(5);
    generatePixels();
  } else if (parseInt(input) > 50) {
    pixelBoard.innerHTML = '';
    generateLines(50);
    generatePixels();
  } else {
    pixelBoard.innerHTML = '';
    generateLines(input);
    generatePixels();
    console.log(pixelBoard);
  }
}

generateButton.addEventListener('click', checkBoard);

let colors = document.getElementsByClassName('color');

// Função que remove/adiciona a classe selected as cores
function selectColor(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// Função que pinta os pixels

function addColor(event) {
    if (event.target.classList.contains('pixel') ) {
        let selectedItem = document.querySelector('.selected');
        let selectedColor = window.getComputedStyle(selectedItem).getPropertyValue('background-color');
        event.target.style.backgroundColor = selectedColor;
    }
}

document.addEventListener('click', addColor, false);

// document.querySelectorAll('.pixel').forEach(item => {
//   item.addEventListener('click', event => {
//   });
// });

// Função que limpa o quadro
function clearBoard() {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

let clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', clearBoard);