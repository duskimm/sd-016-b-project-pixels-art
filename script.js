window.onload = function() {

  let box = document.createElement("div");










  


  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        divLine.appendChild(createBox("box"));
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }











}