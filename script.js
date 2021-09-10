window.onload = function() {
  let numberOfColors = 5;

  let arrayColors = ['green', 'blue', 'red', 'gray', 'black'];

  let colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < numberOfColors; index += 1){
    let divColorPalette = document.createElement('div');
    colorPalette.appendChild(divColorPalette);
    divColorPalette.className = arrayColors[index];
    divColorPalette.classList.add('containerPalette');
  }
}
