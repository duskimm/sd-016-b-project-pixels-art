let lines = 5;
let linePalette = 4;
let positions = lines;
let squareDivs = document.getElementById("pixel-board");
let linePaletteDivs =document.getElementById("color-palette");

// function lineColors() {
//   for (let idx = 1; idx <= linePalette; idx += 1) {
//     let colorPalettes = document.createElement("div");
//     colorPalettes.className = "color";
//     linePaletteDivs.appendChild(colorPalettes);
//   }
// }
// lineColors();

function SquarePalette() {
  for (let lineIdx = 0; lineIdx < lines; lineIdx += 1) {
    for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
      let square = document.createElement("div");
      square.className = "pixel";
      squareDivs.appendChild(square);
    }
  }
}
SquarePalette();