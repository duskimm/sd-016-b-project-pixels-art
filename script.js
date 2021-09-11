function createABoardOfPixels (tamanhoQuadrado){
  let pixelBoard = document.querySelector("#pixel-board");
  for(indexLine = 1; indexLine <= tamanhoQuadrado; indexLine += 1){
    let line = document.createElement("div");
    line.className = "line"
    pixelBoard.appendChild(line)
    
  }
  for(let indexCollum = 0; indexCollum < tamanhoQuadrado; indexCollum += 1){
    for(let i = 0; i < tamanhoQuadrado; i += 1){

      let line = document.querySelectorAll(".line")[indexCollum]
      let pixel = document.createElement("div");
      pixel.className = "pixel"
      line.appendChild(pixel)
    }
  }

}

createABoardOfPixels(5)

function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (
    eventTarget.classList.contains('selected') === false
    && eventTarget.classList.contains('color') === true
  ) {
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function changeColor(event){ /* Foi utilizado a ajuda do 
  Victor Shin Kamiguchi para a resolucao desse exercicio */
  const eventTarget = event.target;
  const colorSelected = document.querySelector(".selected"); 
  const bgColor = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color'); /* * */
  eventTarget.style.backgroundColor = bgColor;
}

function clearBoard(event) {
  const pixels = document.getElementsByClassName("pixel")
  const pixelBoard = document.getElementById("pixel-board")
  pixelBoard.style.backgroundColor = "rgb(255, 255, 255)";
  
  for (let i = 0; i < pixels.length; i += 1){
    pixels[i].style.backgroundColor = "rgb(255, 255, 255)"
  }
 
}


const colorSelect = document.querySelector("#color-palette")
const pixelBoard = document.querySelector("#pixel-board");
const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener("click", clearBoard)
pixelBoard.addEventListener("click", changeColor)
colorSelect.addEventListener("click", addClassSelected)