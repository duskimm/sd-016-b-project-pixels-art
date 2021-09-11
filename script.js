function criandoPixels(){
    let pixelBoard = document.getElementById("pixel-board")
    for (let coluna=0;coluna<25;coluna+=1) {
        let pixel = document.createElement("div");
        pixelBoard.appendChild(pixel);
        pixel.classList.add("pixel");
    }
}
criandoPixels();
function preta() {
    let preto = document.getElementById("square")
    preto
}