const colorNameList = ['black', 'red', 'yellow', 'green'];

function createColorPalete () {
  let getColorPallete = document.querySelector('#color-palette')
  for (let i = 0; i < colorNameList.length; i += 1 ) {
    let getColorElement = colorNameList[i];
    let setColorElement = document.createElement('div');
    setColorElement.classList.add('color');
    setColorElement.style.backgroundColor = getColorElement;
    setColorElement.style.border = 'thin solid black';
    getColorPallete.appendChild(setColorElement);
  }
}

createColorPalete()