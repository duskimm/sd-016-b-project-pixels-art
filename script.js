
let pixelSection = document.getElementById('pixel-board');
let pixelQuantity = 25;

function createPixels() {
  for(let i = 1; i<= pixelQuantity; i +=1) {
    const CreateDivPixel = document.createElement('div');
    CreateDivPixel.className = 'pixel';
    CreateDivPixel.style.backgroundColor = 'white';
    pixelSection.appendChild(CreateDivPixel);
  }
}
createPixels();



