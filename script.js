function newChild(type, text, classs, id) {
  const newChildItem = document.createElement(type);
  newChildItem.innerText = text;
  if (classs !== '') {
    newChildItem.className = classs;
  }
  if (id !== '') {
    newChildItem.id = id;
  }
  return newChildItem;
}

function createLines() {
  const board = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    board.append(newChild('div', '', 'line', ''));
  }
}

function createPixels() {
  const lines = document.querySelectorAll('.line');
  for (const line in lines) {
    for (let index = 0; index < 5; index += 1) {
      line.append(newChild('div', '', 'pixel white', ''));
    }
  }
}

function changeSelectedPosition(event) {
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function paintPixels(event) {
  if (event.target.classList.contains('pixel')) {
    const selectedColor = document.querySelector('.selected');
    const classColor = selectedColor.classList;
    event.target.classList.remove(event.target.classList[1]);
    event.target.classList.add(classColor[1]);
  }
}

/* Metodo event bubbling adquirido atraves deste link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/ */
document.addEventListener('click', function (event) {
  changeSelectedPosition(event);
  paintPixels(event);
}, false);

window.onload = function () {
  createLines();
  createPixels();
};

document.querySelector('#clear-board').addEventListener('click', function () {
  const pixels = document.getElementsByClassName('pixel');
  for (const pixel in pixels) {
    pixel.classList.remove(pixel.classList[1]);
    pixel.classList.add('white');
  }
});
