window.onload = function () {
  function newDiv(name) {
    const newDivElement = document.createElement('div');
    newDivElement.className = name;
    return newDivElement;
  }
  function divLines() {
    const board = document.querySelector('#pixel-board');
    for (let index = 0; index < 5; index += 1) {
      board.appendChild(newDiv('line'));
    }
  }

  function divPixels() {
    const lines = document.querySelectorAll('.line');
    for (const line of lines) {
      for (let index = 0; index < 5; index += 1) {
        line.appendChild(newDiv('pixel'));
      }
    }
  }
  function initialColor() {
    const black = document.querySelector('#black');
    black.classList.add('selected');
    return black;
  }
  divLines();
  divPixels();
  initialColor();
};
