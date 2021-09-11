// Exercicio 4
// function PaletaCore(pixels) {
//     let divPai = document.querySelector('#pixel-board');
//     let divPixels = document.querySelector('.pixel');
    
//     for (let index = 0; index < pixels; index += 1) {
//         divPixels = document.createElement('div');
//         divPixels.classList.add('pixel');
//         divPai.appendChild(divPixels);  
//         }  
// }

// PaletaCore(5);


// Exercicio 6
window.addEventListener('load', function() {
    let corPreta = document.querySelector('#black');
    corPreta.classList.add('selected');
});

// Exercicio 7

// a classe Selected deve ser add a cor selecionada
// somente uma pode ter por vez (eu acho que passa por for e if)
let idBlack = document.querySelector('#black');
let idRed = document.querySelector('#red');
let idGreen = document.querySelector('#green');
let idBlue = document.querySelector('#blue');

function mudaClasseSelected (event) {
    let classSelected = document.querySelector('.selected');

    classSelected.classList.remove('selected');
    event.target.classList.add('selected');

}
idBlack.addEventListener('click', mudaClasseSelected);
idRed.addEventListener('click', mudaClasseSelected);
idGreen.addEventListener('click', mudaClasseSelected);
idBlue.addEventListener('click', mudaClasseSelected);