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
    creatButton("Limpar")
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

creatImput()
let creatSection = document.createElement("section");
dadDivBody.appendChild(creatSection);

/* numero 4 */
function pixelSquare(pixels) {
    let divSquare = document.createElement("div")
    divSquare.id = "pixel-board";
    creatSection.appendChild(divSquare);
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
 pixelSquare(5);




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

/* exercicio 8  */
function paintThePixels() {
    let selectedColor = document.getElementsByClassName('color selected');
    let colorDiv = document.querySelector('.color');
    let pallete = document.querySelector('#pixel-board');
    let backGColor = colorDiv.style.backgroundColor;
    pallete.addEventListener('click', function (event) {
        let eventTargetBackGColor = event.target.backgroundColor;
        if (selectedColor.length > 0 && eventTargetBackGColor !== backGColor) {
            let elementBackGColor = selectedColor[0].style.backgroundColor;
            event.target.style.backgroundColor = elementBackGColor;
        }
    })

}
paintThePixels()

/* exercicio 9  */
function creatButton(params) {
    let creatButton = document.createElement("button");
    creatButton.id = "clear-board";
    creatButton.innerHTML = params;
    dadDivBody.appendChild(creatButton);
    creatButton.addEventListener("click",function () {
     
        let pallete = document.querySelectorAll('.pixel')
        for (let index = 0; index < pallete.length; index++) {        
            pallete[index].style.backgroundColor = "white"
        }
    })
}
function creatImput() {
    let creatImput = document.createElement('input');
    let creatDivImput = document.createElement('div');
    let creatButton = document.createElement('button');
    creatDivImput.className = "input";
    creatImput.id = "board-size"  ;
    creatButton.id = "generate-board";
    creatButton.innerHTML = "VQV"
    dadDivBody.appendChild(creatDivImput);
    creatDivImput.appendChild(creatImput);
    creatDivImput.appendChild(creatButton);
}

function alteredPixelSquared() {
 
    let catchButton = document.querySelector("#generate-board")
    catchButton.addEventListener("click",function() {
        let catchImput = document.querySelector("#board-size").value;
        if(catchImput === ''){
            window.alert("Board inválido!")
        }
        else if(catchImput < 5){
            catchImput = 5;
           
        }
        else if (catchImput > 50){
            catchImput = 50;
        
        }
     
        creatSection.innerHTML= ""
        pixelSquare(catchImput)
    })
}
alteredPixelSquared()
