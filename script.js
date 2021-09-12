let dadDivBody = document.querySelector("body")
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
function creatPaletColorsDiv(params) {
    let divPaletColors = document.createElement("div");
    divPaletColors.id = "color-palette"
    dadDivBody.appendChild(divPaletColors)
    for (let index = 0; index <= params; index += 1) {
        let dadDivColors = document.querySelector("#color-palette")
        let divColors = document.createElement("div");
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

        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        catchDivColor[index].style.backgroundColor = `rgb(${r},${g},${b})`;
    }
}
divBackGroundColor()

/* numero 4 */

function pixelSquare(pixels) {
    let divSquare = document.createElement("div")
    divSquare.id = "pixel-board";
    dadDivBody.appendChild(divSquare);
    let divColuns;
    for (let index = 0; index < pixels; index += 1) {
        let divPixel = document.createElement("div")
        /* divPixel.classList = "pixel" */
        divSquare.appendChild(divPixel)

        for (let indexColun = 0; indexColun < pixels; indexColun += 1) {
            divColuns = document.createElement("div")
            divColuns.classList = "pixel"
            divPixel.appendChild(divColuns)

        }
    }
}
pixelSquare(5)

/* remover a classe dos pais  */

/* exercicio 6 */
function blackColor(params) {
    let classCollorBlack = document.querySelectorAll(".color")[params];
    classCollorBlack.classList.add("selected")
    classCollorBlack.style.backgroundColor = "rgb(0,0,0)"
}
blackColor(0)

function selectColorOfPalet() {
    let catchPaletColors = document.querySelector("#color-palette")
    catchPaletColors.addEventListener("click", function (event) {
        /* dica do luiz wanderson para criar uma função para remover a classe selected */
        removeSelect()
        event.target.classList.add('selected');
    })
}

selectColorOfPalet()
/* por enquanto não esta descelecionando as demais 
 */
function removeSelect() {

    let catchSelect = document.querySelectorAll('.selected');
    for (let index = 0; index < catchSelect.length; index++) {
        catchSelect[index].classList.remove('selected');


    }

}
function paintThePixels() {
    let selectedColor = document.getElementsByClassName('color selected');
    let colorDiv = document.querySelector('.color');
    let pallete = document.querySelector('#pixel-board');
    let backGColor = colorDiv.style.backgroundColor;
        pallete.addEventListener('click',function(event) {
        let eventTargetBackGColor = event.target.backgroundColor;
        if(selectedColor.length > 0 && eventTargetBackGColor !== backGColor){
            let elementBackGColor = selectedColor[0].style.backgroundColor;
            event.target.style.backgroundColor = elementBackGColor;
        }
    })
  
}
paintThePixels()