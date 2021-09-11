

const pixelLine = document.querySelectorAll('.line');
let pixelBoard = document.querySelector('#pixel-board')


function createPixelLine(divLine) {
  for (let index = 0; index < 5; index += 1) {
    const pixelElement = document.createElement('div');
    pixelElement.classList = 'pixel';
    divLine.appendChild(pixelElement);
  }
}

function createPixelBoard(line) {
  for (let index = 0; index < 5; index += 1) {
    createPixelLine(line[index]);
  }
}
createPixelBoard(pixelLine);

const colors = document.getElementsByClassName('color');

//creditos ao canal Rocketseat, video aula muito esclarecedora, que me ajudou a entender a "referencia" a funcao https://www.youtube.com/watch?v=UftSB4DaRU4&ab_channel=Rocketseat.

function selectColor(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);

}

function paintPixel(event){
    if(event.target.classList.contains('pixel')){
    const selectedItem = document.querySelector('.selected');
    const palleteColor = window.getComputedStyle(selectedItem).getPropertyValue('background-color')
    const pixel = event.target
    pixel.style.backgroundColor = palleteColor
    }
}
document.addEventListener('click',paintPixel);


