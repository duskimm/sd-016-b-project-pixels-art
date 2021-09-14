const colorsDiv = document.querySelector('#color-palette');
const colorsChildren = colorsDiv.children;
const pixelsDiv = document.querySelector('#pixel-board');
const pixelsChildren = pixelsDiv.children;

function createColors() {
  const numberOfColors = 4;
  const colors = ['black', 'red', 'blue', 'green'];
  let div;
  for (let index = 0; index < numberOfColors; index += 1) {
    div = document.createElement('div');
    div.classList.add('color');
    colorsDiv.appendChild(div);
    colorsDiv.children[index].style.backgroundColor = (colors[index]);
  }
  colorsChildren[0].classList.add('selected');
}
function createPixel() {
  const pixelNumber = 5;
  let div;
  let count = 0;
  for (let index1 = 0; index1 < pixelNumber; index1 += 1) {
    div = document.createElement('div');
    div.classList.add('pixels-lines');
    pixelsDiv.appendChild(div);
    for (let index = 0; index < pixelNumber; index += 1) {
      div = document.createElement('div');
      div.classList.add('pixel');
      pixelsChildren[index1].appendChild(div);
      const pix = document.querySelectorAll('.pixel');
      pix[count].style.backgroundColor = 'white';
      count += 1;
    }
  }
}
function selectColor(listenerColor) {
  for (let index = 0; index < colorsChildren.length; index += 1) {
    colorsChildren[index].classList.remove('selected');
  }
  listenerColor.target.classList.add('selected');
}
function listenerColor() {
  for (let index = 0; index < colorsChildren.length; index += 1) {
    colorsChildren[index].addEventListener('click', selectColor);
  }
}
// function listenerPixel () {
//   let pix = document.querySelectorAll(".pixel");
//   for (index = 0; index < pix.length; index += 1) {
//     pix[index].addEventListener('click', function () {
//       if (selectColor != pix[0].style.backgroundColor) {
//         console.log(pix[0].style.backgroundColor);
//         // console.log(selectColor(listenerColor));
//         // pix[0].style.backgroundColor = selectColor;
//       }
//     });
//   }
// }
window.onload = function start() {
  createColors();
  createPixel();
  listenerColor();
  // listenerPixel();
};
