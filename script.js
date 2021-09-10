function createABoardOfPixels (height, width){
  let pixelBoard = document.querySelector("#pixel-board");
  console.log(pixelBoard);
  for(indexLine = 1; indexLine <= height; indexLine += 1){
    let line = document.createElement("div");
    line.className = "line"
    pixelBoard.appendChild(line)
    
  }
  for(let indexCollum = 0; indexCollum < width; indexCollum += 1){
    for(let i = 0; i < width; i += 1){

      let line = document.querySelectorAll(".line")[indexCollum]
      let pixel = document.createElement("div");
      pixel.className = "pixel"
      line.appendChild(pixel)
    }
  }

}

createABoardOfPixels(5, 5)