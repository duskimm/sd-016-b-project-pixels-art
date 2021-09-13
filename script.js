// Exercicio 4

let divPai = document.getElementById('pixel-board');

function linha (numero) {
    let criaLinha = document.createElement('div');
    criaLinha.className = 'linhaPixel';
    divPai.appendChild(criaLinha);
    
    for(let index = 0; index < numero; index += 1) {
        let criaPIxel = document.createElement('div');
        criaPIxel.className = 'pixel';
        criaLinha.appendChild(criaPIxel);
    }
}
linha(5);

for (let index = 0; index < 4; index += 1){
    linha(5);
}

// Requisito 6: adiciona classe 'selected' para cor preta
window.addEventListener('load', function() {
    let corPreta = document.querySelector('#black');
    corPreta.classList.add('selected');
});

// Requisito 7: adicona classe 'selected' para as outras cores

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



// Requisito 8: pinta os pixels

function corPixel(event) {
    if (event.target.classList.contains('pixel')) {
        let classSelected = document.querySelector('.selected');
        let corDeFundo = window.getComputedStyle(classSelected, null).getPropertyValue('background-color');
        let pixel = event.target;
        pixel.style.backgroundColor = corDeFundo;
    }
}
document.addEventListener('click', corPixel);

// Requisito 9: botão para limpar o quadro

let botaoLimpar = document.querySelector('#clear-board');
let pixels = document.querySelectorAll('.pixel');

botaoLimpar.addEventListener("click", function(){
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'white';
    }
})