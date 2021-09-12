 window.onload = function() {
  let rows = 5;
  let columns = 5;

createColorPalette();
createRows();
createColumns();
blackColorSelected();

function createColorPalette() {
  const colors = ['black', 'yellow', 'red', 'blue'];
  let recoveryDivColor = document.getElementById('color-palette');
    
  for(let index = 0; index < colors.length; index += 1) {
    let divColor = document.createElement('div');
    divColor.className = 'color';
    recoveryDivColor.appendChild(divColor);
    divColor.style.backgroundColor = colors[index];
    }
}

function createRows() {
  let recoveryDivPixelB = document.getElementById('pixel-board');
  for(let index = 0; index < rows; index += 1) {  //cria as linhas
    let divRow = document.createElement('div');
    divRow.className = 'pixel';
    divRow.style.backgroundColor = 'white';
    recoveryDivPixelB.appendChild(divRow);
  }
}

 function createColumns() {
  let recoveryDivPixelB = document.getElementById('pixel-board');
  for(let index = 0; index < rows; index += 1) {
      for(let index2 = 0; index2 < (columns -1); index2 +=1 ) { // o columns -1 é usado pq a primeira linha já foi criada na função anterior
        let divColumn = document.createElement('div');
        divColumn.className = 'pixel'
        divColumn.style.backgroundColor = 'white';
        recoveryDivPixelB.appendChild(divColumn);
    }
}
}

 function blackColorSelected() {
    let recoveryDivColor = document.querySelector('.color');
    recoveryDivColor.classList.add('selected');
    // console.log(recoveryDivColor);
 }
}
