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


// quando a pagina carregar a cor preta deve estar selecionada
// cor preta deve ter a classe Selected

window.addEventListener('load', function(){
    let corPreta = document.querySelector('#black');
    corPreta.classList.add('selected');
})
