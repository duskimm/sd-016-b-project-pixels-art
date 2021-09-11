window.onload = function () {
  let firstColor = document.querySelector("#bk");
  firstColor.classList.add("selected");
  firstColor.style.background = "black";
}

const black = document.getElementById("bk");
const red = document.getElementById("g");
const blue = document.getElementById("b");
const green = document.getElementById("r");

function changeClass(event) {
  const getClass = document.querySelector(".selected");
  getClass.classList.remove("selected");
  event.target.classList.add("selected");
}
black.addEventListener("click", changeClass);
red.addEventListener("click", changeClass);
blue.addEventListener("click", changeClass);
green.addEventListener("click", changeClass);



