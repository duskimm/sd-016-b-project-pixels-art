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
//-----

const pixelBoardArray = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelBoardArray.length; index += 1) {
  pixelBoardArray[index].onclick = function (event) {
    const actualColor = document.querySelector('.selected');
    const BGColorSelected = window.getComputedStyle(actualColor, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = BGColorSelected;
  };
}; 

/* ou
const pixelBoardArray = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelBoardArray.length; index += 1) {
  pixelBoardArray[index].addEventListener ('click', btg);
  
    function btg (event) {
      const actualColor = document.querySelector('.selected');
      const BGColorSelected = window.getComputedStyle(actualColor, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = BGColorSelected;
    };
}; */