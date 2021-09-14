let boxBlue = document.getElementById("blue");
let boxBlack = document.getElementById("black");
let boxRed = document.getElementById("red");
let boxYellow = document.getElementById("yellow");
let bigBox = document.getElementById(".pixel")

boxBlue.addEventListener('click', selectColor);
boxBlack.addEventListener('click', selectColor);
boxRed.addEventListener('click', selectColor);
boxYellow.addEventListener('click', selectColor);

bigBox.addEventListener('click', function)

function selectColor() {
    const color = this.id;
    localStorage.setItem("cor",color);