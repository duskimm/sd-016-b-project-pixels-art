
const pixelSection = document.getElementById('pixel-board');
const BlackColorSelect = document.querySelector('#black')

let pixelQuantity = 25;
//Cria o "tabuleiro"
function createPixels() {
  for(let i = 1; i<= pixelQuantity; i +=1) {
    const CreateDivPixel = document.createElement('div');
    CreateDivPixel.className = 'pixel';
    CreateDivPixel.style.backgroundColor = 'white';
    pixelSection.appendChild(CreateDivPixel);
  }
}
createPixels();





