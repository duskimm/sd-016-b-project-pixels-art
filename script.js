/* numero 1 */
function title(params) {
let divTitle = document.createElement("div");
let dadDivTitle = document.querySelector("body");
dadDivTitle.appendChild(divTitle);
let creatH1 = document.createElement("h1");
divTitle.appendChild(creatH1);
let h1Title = document.querySelector("h1");
h1Title.id = "title";
h1Title.innerHTML = params;

}
title("Paleta de Cores");
/* numero 2 */
function creatPaletColorsDiv(params){
    let dadDivPaletColors = document.querySelector ("body")
    let divPaletColors = document.createElement ("div");
    divPaletColors.id = "color-palette"
    dadDivPaletColors.appendChild(divPaletColors)
    for (let index = 0; index <= params; index+=1) { 
        let dadDivColors = document.querySelector("#color-palette")
        let divColors = document.createElement ("div");
        divColors.classList.add("color")
        dadDivColors.appendChild(divColors)
    }
}
creatPaletColorsDiv(3)
/* dividir em duas funçoes depois */

function divBackGroundColor() {
   /*  peguei a referencia do codigo de cores aleatorias nesse video https://youtu.be/9nt9HRdPSpo */
    let catchDivColor = document.querySelectorAll(".color")
    for (let index = 1; index < catchDivColor.length; index += 1) {
        let r =Math.floor(Math.random()*255)
        let g =Math.floor(Math.random()*255)
        let b =Math.floor(Math.random()*255)
        catchDivColor[index].style.backgroundColor =`rgb(${r},${g},${b})`;   
    }    
}
divBackGroundColor()
