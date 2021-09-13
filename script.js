let quadradoSelecao=0;
function criandoPixels(){
    let pixelBoard = document.getElementById("pixel-board")
    for (let coluna=0;coluna<25;coluna+=1) {
        let pixel = document.createElement("div");
        pixel.setAttribute("id",coluna);
        pixel.setAttribute("class",'pixel');
        pixel.onclick = new Function('colorir(this)');
        pixelBoard.appendChild(pixel);
    }
}
criandoPixels();
document.getElementById('square1').onclick=function(){
quadradoSelecao = 0;
}
document.getElementById('square2').onclick=function(){
quadradoSelecao = 1;
    }
document.getElementById('square3').onclick=function(){
quadradoSelecao = 2;
    }    
document.getElementById('square4').onclick=function(){
quadradoSelecao = 3;
    }
function colorir(a){
    switch (quadradoSelecao) {
        case 0:
            document.getElementById(a.id).style.background = "black";
            break;
        case 1:
            document.getElementById(a.id).style.background ="#6FD6CB";
            break;
        case 2:
            document.getElementById(a.id).style.background = "#F0E948";
            break;
        case 3:
            document.getElementById(a.id).style.background = "#4300F5";
            break;
    }
}
