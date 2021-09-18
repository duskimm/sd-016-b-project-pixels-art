const select = document.querySelectorAll(".color selected");
const color = document.querySelectorAll(".color");
const palette = document.getElementById("color-palette");


function corSelect(evento){
    for (let index = 0; index < color.length; index+= 1) {
      color[index].classList.remove('selected');
    }
    evento.target.classList.add('selected')
}
palette.addEventListener('click',corSelect)