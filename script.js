window.onload = function() {
  let baseGrid = 5;
  const container = document.getElementById('pixel-board')
  
  function grid() {
    for (let i = 0; i < baseGrid; i += 1) {
      const pixel = document.createElement('div')
      pixel.className = 'pixel'
      for (let index = 0; index < baseGrid; index += 1) {
        const columnGrid = document.createElement('div')
        columnGrid.className = 'pixel'
        pixel.appendChild(columnGrid)
      }
      container.appendChild(pixel)
    }
  }
grid()
}