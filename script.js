function createPixelBoard(numberOfPixelsPerLine) {
  const pixelBoard = document.createElement('section');
  const pixelSize = 42;
  const height = pixelSize * numberOfPixelsPerLine;
  const width = pixelSize * numberOfPixelsPerLine;
  pixelBoard.id = 'pixel-board';
  document.body.appendChild(pixelBoard);
  pixelBoard.style.height = `${height}px`;
  pixelBoard.style.width = `${width}px`;
}
createPixelBoard(5);

function createPixel(n) {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < n; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
createPixel(25);

function setSelectedColor() {
  const color = document.querySelector('.selected');
  const background = window.getComputedStyle(color, null).getPropertyValue('background-color');
  return background;
}

function clearButton() {
  const pixelBoard = document.querySelector('#pixel-board');
  const button = document.createElement('button');
  button.innerHTML = 'Limpar';
  button.id = 'clear-board';
  document.body.insertBefore(button, pixelBoard);
}
clearButton();

function clearBoard() {
  const button = document.querySelector('#clear-board');
  const pixels = document.getElementsByClassName('pixel');
  const white = 'white';
  button.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = white;
    }
  });
}
clearBoard();

window.onload = () => {
  const blockSelected = document.querySelector('.black');
  blockSelected.classList.add('selected');
  setSelectedColor();
};

function checkSelectedColor() {
  const paletteOfColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    if (paletteOfColors[index].classList.contains('selected') === true) {
      paletteOfColors[index].classList.toggle('selected');
    }
  }
}

function chooseColor() {
  const paletteOfColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    paletteOfColors[index].addEventListener('click', () => {
      checkSelectedColor();
      paletteOfColors[index].classList.toggle('selected');
      setSelectedColor();
    });
  }
}
chooseColor();

function checkSelectedPixel() {
  const pixels = document.getElementsByClassName('pixel');
  const classs = 'pixel-selected';
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index].classList.contains(classs) === true) {
      pixels[index].classList.toggle(classs);
    }
  }
}

function addColor(pixel) {
  const pixels = pixel;
  pixels.style.backgroundColor = setSelectedColor();
}

function choosePixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      checkSelectedPixel();
      addColor(pixels[index]);
      pixels[index].classList.toggle('pixel-selected');
    });
  }
}
choosePixel();
