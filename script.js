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
  // function createPixels(className) {     //className 'pixels';
  //   let pixel = document.createElement('div');
  //   pixel.className = className;
  //   pixel.style.backgroundColor = 'white';
  //   pixel.style.color = 'white';
  //   return pixel;
  // }

  // function addPixelsToBoard() {
  //   for (index = 0; index < numberOfLines; index += 1) {
  //     let pixel = createPixels('pixels');
  //     let pixelDiv = document.querySelectorAll('.pixels-div');
  //     pixelDiv[index].appendChild(pixel);
  //   }
  // }

  // addPixelsToBoard();
