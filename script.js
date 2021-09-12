function grid() {
  const baseGrid = 5;
  const container = document.getElementById('pixel-board');
  for (let i = 0; i < baseGrid; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'gridRow';
    for (let index = 0; index < baseGrid; index += 1) {
      const columnGrid = document.createElement('div');
      columnGrid.className = 'pixel';
      container.appendChild(rowDiv);
      rowDiv.appendChild(columnGrid);
    }
  }
}
function select() {
  const pickedColor = document.querySelector('.color');
  pickedColor.classList.add('selected');
  const aquarela = document.querySelector('#color-palette');
  aquarela.addEventListener('click', function pickColor(toPaint) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    toPaint.target.classList.add('selected');
  });
}
function getColored() {
  const container = document.getElementById('pixel-board');
  container.addEventListener('click', function paint(clickedPixel) {
    const currentColor = document.querySelector('.selected');
    const currentColors = window.getComputedStyle(currentColor).backgroundColor;
    const clickedTarget = clickedPixel.target;
    if (clickedTarget.className === 'pixel') {
      clickedTarget.style.backgroundColor = currentColors;
    }
  });
}
function clean() {
  const main = document.querySelector('main');
  const resetButton = document.createElement('button');
  main.insertBefore(resetButton, main.childNodes[4]);
  resetButton.id = ('clear-board');
  resetButton.innerText = 'Limpar';
  resetButton.addEventListener('click', function clearGrid() {
    const completeGrid = document.querySelector('#pixel-board').children;
    for (let i = 0; i < completeGrid.length; i += 1) {
      const gridDiv = completeGrid[i];
      for (let index = 0; index < completeGrid.length; index += 1) {
        const divPixel = gridDiv.children;
        divPixel[index].style.backgroundColor = 'white';
      }
    }
  });
}
window.onload = function start() {
  grid();
  select();
  getColored();
  clean();
};
