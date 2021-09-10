//criar div dentro da div color-pallet que possuam a classe color;

function criaDivCores (array){
    let arrayCores = ["black", "red", "green", "blue"];
    let divPaleta = document.getElementById('color-palette');
    for (let i = 0; i <=arrayCores.length; i+=1){
        let caixa = document.createElement('div');
        caixa.style.background = arrayCores[i];
        caixa.className = "color"
        divPaleta.appendChild(caixa)
    }
}
criaDivCores();