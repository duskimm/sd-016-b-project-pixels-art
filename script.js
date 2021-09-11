window.onload = function start() {
  function grid() {
    const baseGrid = 5;
    const container = document.getElementById('pixel-board');
    for (let i = 0; i < baseGrid; i += 1) {
      const rowDiv = document.createElement('div');
      for (let index = 0; index < baseGrid; index += 1) {
        const columnGrid = document.createElement('div');
        columnGrid.className = 'pixel';
        rowDiv.appendChild(columnGrid);
        container.appendChild(rowDiv);
      }
    }
  }
  grid();
};
