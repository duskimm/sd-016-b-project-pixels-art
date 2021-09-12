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
  aquarela.addEventListener('click', function pickColor(Event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    Event.target.classList.add('selected');
  });
}
window.onload = function start() {
  grid();
  select();
};
