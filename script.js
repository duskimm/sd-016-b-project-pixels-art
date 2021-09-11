const baseGrid = 5;
let gridWidth = baseGrid;
const gridPixel = document.querySelectorAll('.pixel');

function createPixel(pixelClass) {
  const pixel = document.createElement('div');
  pixel.className = pixelClass;
  return pixel;
}

function grid(pixels) {
  for (let i = 1; i <= baseGrid; i += 1) {
    if (i <= gridWidth) {
      const pixel = createPixel('pixel');
      pixels.appendChild(pixel);
    }
  }
}

function createGrid(gridPixelParam) {
  for (let index = 0; index <= baseGrid; index += 1) {
    grid(gridPixelParam[index]);
    gridWidth += 1;
  }
}

createGrid(gridPixel);
