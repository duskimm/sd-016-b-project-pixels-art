window.onload = function() {
  
  let functionModifyer = 1
  let baseGrid = 5
  let gridHeight = baseGrid
  let gridWidth = baseGrid
  let gridPixel = document.querySelectorAll(".pixel")
  
  createGrid(gridPixel)
  
  function createPixel(pixelClass) {
    let pixel = document.createElement("div")
    pixel.className = pixelClass
    return pixel
  }

  function grid(pixels) {
    for (let i = 1; i <= baseGrid; i += 1) {
      if (i <= gridHeight && i <= gridWidth) {
        let pixel = createPixel("pixel")
        pixels.appendChild(pixel)
      }
    }
  }

  function createGrid(gridPixel) {
    for (let index = 0; index <= baseGrid; index += 1) {
      grid(gridPixel[index])
      gridWidth += 1
    }
  }
}