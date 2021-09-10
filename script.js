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

function criaColuna(){
    for (let i=1; i < n; i+=1){
        let pixel = document.createElement('div');
        pixel.className= "pixel";
        quadro.appendChild(pixel);
    }

}
criaColuna()

function criaLinha(){
for (let i=0; i < n; i+=1){
    let pixel = document.createElement('div');
    pixel.className= "pixel linha";
    quadro.appendChild(pixel);
}
}

criaLinha()
