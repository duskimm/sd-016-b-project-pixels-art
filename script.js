
window.onload = function() {
    let firstSelect = document.querySelector('.color');
    firstSelect.classList.add("selected");
    colors =['black', 'red', 'orange', 'blue']


// function createPalette (qtd) {
//     for(let i= 0; i < qtd; i += 1) {
//     const pixelBoard = document.querySelector('#pixel-board');
//     const pixels = document.createElement('div');  
//     pixels.className = 'pixel' 
//     pixelBoard.appendChild(pixels);
//     console.log(pixels);
//     }
// }


function createListeners(){
    for (let i=0; i<colors.length; i+=1) {
        document.querySelector('.color.'+ colors[i]).addEventListener("click", select);
    }
} createListeners();


 // https://medium.com/@erycdasilva/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f
function select() {
    const listPalette = document.querySelectorAll('.color')
    for (let i=0; i<listPalette.length; i+=1) {
        if(event.target == listPalette[i]) {
            listPalette[i].classList.add('selected')
        } else {
            listPalette[i].classList.remove('selected')
        }  
        console.log(listPalette[i]); 
    }
}



function createPixels (qtd) {
    for(let i= 0; i < qtd; i += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const pixels = document.createElement('div');  
    pixels.className = 'pixel' 
    pixelBoard.appendChild(pixels);
    }
}
createPixels(25);
}