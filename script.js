// Requisito 7
const pixels = document.querySelectorAll('.pixel');
const div = document.querySelectorAll('div');
const clearButton = document.getElementById('clear-board');
const colors = document.querySelectorAll('.color');

// colors[1].addEventListener('click', pickColor); 
function pickColor (event) {
  // colors.addEventListener('click', pickColor); 
  const selectedColor = document.querySelector('.selected');
    if(selectedColor != null) {
      selectedColor.classList.remove('selected');
      event.target.classList.add('selected');
    }
    event.target.classList.add('selected')
  } 
function addColorsToPixel (){
  for (let index = 0; index < colors.length; index += 1){
  colors[index].addEventListener('click', pickColor); 
 }
}

addColorsToPixel(colors)


function clearBoard () {
  const pixelToClear = document.querySelectorAll('.pixel') 
  for (let index = 0; index < pixelToClear.length; index += 1) {
  pixelToClear[index].style.backgroundColor = 'white';
 }
}

clearButton.addEventListener('click', clearBoard);

// function selectColor (event){
//   if (selectedColor === null) {
//     event.target.classList.add('selected');
//   } else {
//     selectedColor.classList.remove('selected');
//     event.target.classList.add('selected');
//   }
// }

// colors.addEventListener('click', selectColor);

// function cascaca (event) {
//   let clickedItem = event.target
//   if(clickedItem.className === 'selected') {
//     for (let index = 0; index < colors; index += 1) {
//       colors[index].style.backgroundColor = '';
//     }
//   } clickedItem.style.backgroundColor = 'red'
// 