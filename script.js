
let idx = 5;
let pixelBoard = document.getElementById("pixel-board");

function coluna (){
    for (let index = 0; index <= idx; index+=1) {
        let pixelColuna = document.createElement("div");
        pixelBoard.appendChild(pixelColuna);
    }
}

function linha(){
    for (let index = 0; index < idx; index+=1) {
        let pixelLinha = document.createElement("div");
        pixelLinha.className= "linhas";
        pixelBoard.appendChild(pixelLinha)
    }
}

linha()
coluna ()