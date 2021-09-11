// window.onload function(){

// }

function createColorPalette (){
    let colors = ['black','yellow','red','blue'];
    let recoveryDivColor = document.getElementById('color-palette');

    for(let index = 0; index < colors.length; index += 1){
        let arrayColor = colors[index];
        let divColor = document.createElement('div');
        divColor.className = 'color';
        recoveryDivColor.appendChild(divColor);
        divColor.style.backgroundColor = arrayColor;
    }

}

createColorPalette();