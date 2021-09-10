/**
*Função que seleciona a cor e salva no local storage
*/
function selectColorBox(event) {
  // event.preventDefault();
  console.log(event.target.id);
  localStorage.setItem('selectedColor', event.target.id);
}

const selectedColor = document.querySelectorAll('.color');
const savedColor = localStorage.getItem('selectedColor');
// console.log("Cor salva no sistema " + savedColor);

/**
 *Checa se se existe cor selecionada e aplica classe
 */
if (savedColor != null) {
  for (let index = 0; index < selectedColor.length; index += 1) {
    if (selectedColor[index].id === savedColor) {
      selectedColor[index].className = 'color selected';
    } else {
      selectedColor[index].className = 'color';
    }
  }
}

/**
 *Seleciona todos as boxes(divs) com a classe .color
 */
for (let index = 0; index < selectedColor.length; index += 1) {
  selectedColor[index].addEventListener('click', selectColorBox);
}
// console.log(selectedColor);

/**
 *Seleciona todos os box com a c lasse .pixel
 */
const pixelBox = document.querySelectorAll('#pixel-board .pixel');
console.log(pixelBox);
