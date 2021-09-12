function grid() {
  const baseGrid = 5;
  const container = document.getElementById('pixel-board');
  for (let i = 0; i < baseGrid; i += 1) {
    const rowDiv = document.createElement('div');
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
    let currentColor = document.querySelector('.selected');
    let currentColors = window.getComputedStyle(currentColor).backgroundColor
    clickedPixel.target.style.backgroundColor = currentColors
  })
}
window.onload = function start() {
  grid();
  select();
  getColored();
};
