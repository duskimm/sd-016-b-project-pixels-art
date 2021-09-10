window.onload = function () {
  const numberOfLines = 25;

  function createDivs(numberOfDivs) {
    for (let index = 1; index <= numberOfDivs; index += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      pixelDiv.style.backgroundColor = 'white';
      pixelDiv.style.border = '1px solid black';
      const board = document.getElementById('pixel-board');
      board.appendChild(pixelDiv);
    }
  }
  createDivs(numberOfLines);
};

const colorBlack = document.querySelector('#black');
colorBlack.classList.add('selected');
console.log(colorBlack);
