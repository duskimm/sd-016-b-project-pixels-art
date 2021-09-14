window.onload = function complet() {
  const colorSelected = document.getElementById("color-palette");
  const board = document.getElementById("pixel-board");
  const buttonToClean = document.getElementById("clear-board");
  const generateNewSizeBoard = document.getElementById("generate-board");
  const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  // Busquei no seguinte site a informação para conseguir uma cor aleatoria.
  // link: https://css-tricks.com/snippets/javascript/random-hex-color/
  // Colors
  document.getElementById("color1").style.backgroundColor = "black";
  document.getElementById("color2").style.backgroundColor = "#" + randomColor1;
  document.getElementById("color3").style.backgroundColor = "#" + randomColor2;
  document.getElementById("color4").style.backgroundColor = "#" + randomColor3;
  // event that swith the class selected
  colorSelected.addEventListener("click", function(event) {
      document.querySelector(".selected").classList.remove("selected");
      event.target.classList.add("selected");
    });
    // use the background-color selected to paint the pixel in board
    board.addEventListener("click", function(event) {
        const colorPaint = document.querySelector(".selected").style.backgroundColor;
        event.target.style.backgroundColor = colorPaint;
    });
  // button to clear
  buttonToClean.addEventListener("click", function() {
    const pixels = document.getElementsByClassName("pixel");
    for(index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = "white";
    }
  })
  // Generate board with new size
  generateNewSizeBoard.addEventListener("click", function() {
    const pixels = document.querySelectorAll(".pixel");
    for(index = 0; index < pixels.length; index += 1) {
      board.removeChild(pixels[index]);
    }
    let size = document.getElementById("board-size").value;
    if (size < 5) {
      size = 5;
    }
    if (size >50) {
      size = 50;
    }
    if (size === "") {
      window.alert("Board inválido");
    }
    board.style.height = size * 42 + "px";
    board.style.width = size * 42 + "px";
    for(index = 0; index < (size * size); index += 1) {
      const newPixel = document.createElement("div");
      newPixel.classList.add("pixel");
      board.appendChild(newPixel);
    }
  });
};