window.onload
let idx = 5;
let pixelBoard = document.getElementById("pixel-board");

function linha(){
   for (let index = 0; index < idx; index+=1) {
        let pixelLinha = document.createElement("div");
        pixelLinha.className = "linha";
        pixelBoard.appendChild(pixelLinha)
       coluna (pixelLinha)
   }   
}
function coluna (linha){
    for (let index = 0; index < idx; index+=1) {
        let pixelColuna = document.createElement("div");
        pixelColuna.className = "pixel"
        linha.appendChild(pixelColuna);
    }
}

function selected (event) {
    
}


linha()
