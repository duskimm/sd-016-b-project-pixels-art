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
  for (const line of lines) {
    for (let index = 0; index < 5; index += 1) {
      line.append(newChild('div', '', 'pixel', ''));
    }
  }
}

//Metodo event bubbling adquirido atraves deste link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}, false);

window.onload = function () {
  createLines();
  createPixels();
};
