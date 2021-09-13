function generatePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';

  return pixel;
}

function generateRow(dimension) {
  const row = document.createElement('div');
  row.className = 'pixel-board-row';

  for (let counter = 0; counter < dimension; counter += 1) {
    row.appendChild(generatePixel());
  }
  return row;
}

function generatePixelBoard(dimension) {
  const pixelBoardContainer = document.querySelector('#pixel-board');

  for (let counter = 0; counter < dimension; counter += 1) {
    pixelBoardContainer.appendChild(generateRow(dimension));
  }
}

generatePixelBoard(5);

window.onload = function selectColor () {
    let firstload = true;
    if(firstload){
      let colorSelect = document.querySelector('.color');
      colorSelect.classList.add('selected');
    }else {

    }
  }

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
  
      event.target.classList.add('selected');
    }
  }, false);