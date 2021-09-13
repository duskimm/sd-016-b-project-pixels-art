const blackColor = document.querySelector("#black-palette");
const pixelBoard = document.querySelector("#pixel-board");
let pixelLineDiv;
const colorPalette = document.querySelector("#color-palette")
const selectedColorDiv = document.getElementsByClassName("selected");
window.onload = blackColor.classList.add("selected");
const pixel = document.getElementsByClassName("pixel");
let clearButton = document.querySelector("#clear-board")
const gridSizeButton = document.querySelector("#generate-board")
let gridSize = document.querySelector("#board-size");
gridSize.value = 5;
function pixelLine(numero){
    for(let j = 1; j <= numero; j++){
        pixelLineDiv = document.createElement("div")
        pixelLineDiv.classList.add("pixel-line")
        pixelBoard.appendChild(pixelLineDiv);
        pixelColumn(numero);
        }
}
function pixelColumn(numero){
    for(let i = 1; i <= numero; i++){
        const individualPixel = document.createElement("div");
        individualPixel.classList.add("pixel");
        pixelLineDiv.appendChild(individualPixel);
    }
}
pixelLine(gridSize.value)

function selectedPalette(){
    const palette = colorPalette.children
    for(let i =0; i< palette.length; i++){
        palette[i].addEventListener("click", function(event){
            document.querySelector(".selected").classList.remove("selected")
            event.target.classList.add("selected")
        })
    }
}
selectedPalette();


function paintPixels(){
    for(let i = 0; i < pixel.length; i++){
        pixel[i].addEventListener("click", function(event){
            const selectedColor = selectedColorDiv[0].id
            event.target.id = selectedColor;
        })
    }
}
paintPixels();

clearButton.addEventListener("click", function (){
    for(let i = 0; i < pixel.length; i++){
        pixel[i].id = ""
    }
});
gridSize.addEventListener('input', function(event){
    event.target.value = this.value;
    //this é um comando novo para mim, achei ele nesse link do stackOverflow : https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change numa resposta do usuario Quentin. Entendi como a função funciona através do link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this 
})
gridSizeButton.addEventListener("click", function(){
    pixelLine(gridSize.value)
});
