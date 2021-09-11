function createPixelBoard(numberOfPixelsPerLine) {
  const pixelBoard = document.createElement('section');
  const pixelSize = 42;
  let height = pixelSize * numberOfPixelsPerLine;
  let width = pixelSize * numberOfPixelsPerLine;
  pixelBoard.id = 'pixel-board';
  document.body.appendChild(pixelBoard);
  pixelBoard.style.height = height + 'px';
  pixelBoard.style.width =  width + 'px';
}
createPixelBoard(5);

function createPixel(n) {
  const pixelBoard = document.getElementById('pixel-board');

  for(let index = 0; index < n; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
createPixel(25);

window.onload = function() {
  let blockSelected = document.querySelector('.black');
  blockSelected.classList.add('selected');
}

function checkSelectedColor() {
  let paletteOfColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    if (paletteOfColors[index].classList.contains('selected') === true) {
      paletteOfColors[index].classList.toggle('selected');
    }
  }
}

function chooseColor() {
  let paletteOfColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    paletteOfColors[index].addEventListener('click', () => {
      checkSelectedColor();
      paletteOfColors[index].classList.toggle('selected');
    })
  }
}
chooseColor()
