window.onload = function () {
  divLines();
  divPixels();
  initialColor();
};

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
  
  // fonte de pesquisa : https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing para criação da função.
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }, false);