//criar div dentro da div color-pallet que possuam a classe color;
function criaDivCores (array){
    let arrayCores = ["black", "red", "green", "blue"];
    let divPaleta = document.getElementById('color-palette');
    for (let i = 0; i <arrayCores.length; i+=1){
        let caixa = document.createElement('div');
        caixa.style.background = arrayCores[i];
        caixa.className = "color"
        divPaleta.appendChild(caixa)
    }
}
criaDivCores();

let n = 5;
let quadro = document.getElementById('pixel-board')
let nDecrescente = 5-1

function criaColuna(){
    for (let i=2; i <=n; i+=1){
        let pixel = document.createElement('div');
        criaLinha()
        quadro.appendChild(pixel);
    }
}
criaColuna()

function criaLinha(){
     for (let i=1 ; i <=n; i+=1){
       let pixel = document.createElement('div');
       pixel.className= "pixel linha";
       quadro.appendChild(pixel);
     }
 }
 criaLinha()

function botaoReiniciar (){
    let botaoBranco = document.createElement('button');
    let corpoDoSite = document.getElementsByTagName('body')[0];
    botaoBranco.innerText = 'Limpar';
    botaoBranco.id = "clear-board"
    corpoDoSite.appendChild(botaoBranco);
}
botaoReiniciar()

let botaoBranco = document.querySelector("#clear-board");

botaoBranco.addEventListener("click", reiniciaJogo)

let branco = "white";
function reiniciaJogo(){
    let quadrados = document.querySelectorAll(".pixel");
    for (let i =0; i<quadrados.length; i+=1){
        quadrados[i].style.background = branco
    }
}

window.onload = function() {
   let paletaDeCores = document.querySelectorAll(".color");
   paletaDeCores[0].className = "color selected"
}

