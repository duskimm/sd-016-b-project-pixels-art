window.onload= function () {
    
    // Requisito 1, 2 e 3

    const colors = ["black", "red", "yellow", "blue"];
    let colorsPalette = document.getElementById("color-palette");

    function createColors (colors) {
        for (let i = 0; i < colors.length; i ++) {
            let color = document.createElement("div");
            color.className = "color";
            color.style.backgroundColor = colors[i];
            colorsPalette.appendChild(color);
        }
    }
    
    createColors (colors);

    // Requisito 4

    let numberOfPixelBoard = 25;
    let pixelBoard = document.getElementById("pixel-board");

    function generatePixelBoard (size) {
        for (let i = 1; i <= size; i++ ) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixelBoard.appendChild(pixel);
        }
    }

    generatePixelBoard(numberOfPixelBoard);

    // Requisito 5 cumprido no style.css

    // Requisito 6

    function selectColor (color) {
        let listOfColors = document.getElementsByClassName("color");
        for (i = 0; i < listOfColors.length; i ++) {
            if (listOfColors[i].style.backgroundColor === color) {
                listOfColors[i].classList.add("selected");
            }
        }
    }
    
    selectColor("black");
}