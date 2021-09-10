const blackColor = document.querySelector("#black-palette");
const pixelBoard = document.querySelector("#pixel-board");
let pixelLineDiv;
window.onload = blackColor.classList.add("selected");


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
pixelLine(5);
