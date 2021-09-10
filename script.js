// Paleta de Cores
// Gerador de cores aleatórias
function colorGenerator () {
    let randomColor1 = Math.floor(Math.random() * 255) + 1;
    let randomColor2 = Math.floor(Math.random() * 255) + 1;
    let randomColor3 = Math.floor(Math.random() * 255) + 1;
    let randomColor = `rgb (${randomColor1}, ${randomColor2}, ${randomColor3})`;

    return randomColor;
}
console.log(colorGenerator());

// Função para setar primeira cor;
function setFirstColor() {
    let firstColor = document.querySelector(".firstColor");
    firstColor.style.backgroundColor = "black"

}
setFirstColor();

// Função para setar cores aleatórias (NAO FUNCIONAL??)

function setRandomColors () {
    let colors = document.querySelectorAll(".randomColors");
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].style.backgroundColor = colorGenerator();
    }
}
setRandomColors();

// Funcao para selecionar a cor (INCOMPLETA) 
function selectColor() { 
    let paletteColors = document.querySelectorAll('.color') 

    paletteColors.addEventListener("click", function(){
    for (let i = 0; i < paletteColors.length; i+=1) {

    }
    })
}
// Fim da Paleta de cores;

function createGrid(input) {
    let gridSize = input * input;
    let board = document.getElementById("pixel-board");
    for (let i = 0; i < gridSize; i+=1){
        let squares = document.createElement('div');
        squares.className = 'pixel'
        board.appendChild(squares);
    }
}

createGrid(5);
