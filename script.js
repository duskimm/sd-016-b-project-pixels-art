window.onload = function () {
let colorBlack = document.querySelector('.corBlack');
colorBlack.classList.add('selected');

let colorBlue = document.querySelector('.corBlue');
let colorGreen = document.querySelector('.corGreen');
let colorYellow = document.querySelector('.corYellow');

colorBlue.addEventListener('click', selecaoBlue);

function selecaoBlue(){
  colorBlue.classList.add('selected');
  colorBlack.classList.remove("selected");
  colorGreen.classList.remove("selected");
  colorYellow.classList.remove("selected");
} 

colorGreen.addEventListener('click', selecaoGreen);

function selecaoGreen(){
  colorGreen.classList.add('selected');
  colorBlack.classList.remove("selected");
  colorBlue.classList.remove("selected");
  colorYellow.classList.remove("selected");
} 

colorYellow.addEventListener('click', selecaoYellow);

function selecaoYellow(){
  colorYellow.classList.add('selected');
  colorBlack.classList.remove("selected");
  colorBlue.classList.remove("selected");
  colorGreen.classList.remove("selected");
} 

colorBlack.addEventListener('click', selecaoBlack);

function selecaoBlack(){
  colorBlack.classList.add('selected');
  colorYellow.classList.remove("selected");
  colorBlue.classList.remove("selected");
  colorGreen.classList.remove("selected");
} 
}