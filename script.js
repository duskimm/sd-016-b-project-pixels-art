window.onload = function inicialColor() {
  const blackColor = document.querySelector('.color');
  blackColor.classList.add('selected');
};

//----
// este era meu codigo orignal, mas com ajuda do Hugo Daniel, cheguei ao debaixo.

/*  const mouseOverPalette = document.getElementById('color-palette');
mouseOverPalette.addEventListener('mouseover', clickAlert);

function clickAlert() {
  */
/* const colorArray = document.querySelectorAll('.color');

  for (const index in colorArray) {
    colorArray[index].addEventListener('click', (event) => {
      for (const index in colorArray) {
        colorArray[index].className = 'color';
      }
      event.target.classList.add('selected');
    });
  }
//} */

const colorArray = document.querySelector('#color-palette');
colorArray.addEventListener('click', (event) => {
  for (let index = 0; index < colorArray.children.length; index += 1) {
    colorArray.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});