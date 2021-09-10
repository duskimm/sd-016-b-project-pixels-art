window.onload = function() {
    const colorSelected = document.getElementById("color-palette");
    const board = document.getElementById("pixel-board");
    // Colors
    document.getElementById("black").style.backgroundColor = "black";
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("yellow").style.backgroundColor = "yellow";
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
};