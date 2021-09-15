window.onload = function() {
    const color0 = document.querySelector('.color0');
    color0.classList.add('selected');
}

const color0 = document.getElementsByClassName('color0');
const color1 = document.getElementsByClassName('color1');
const color2 = document.getElementsByClassName('color2');
const color3 = document.getElementsByClassName('color3');

//requisito 7, com o auxílio da Mariana Saraiva que salvou minha vida.

const selectColor = document.querySelectorAll('.color');
function selectedColor(event) {
    for (let index = 0; index < selectColor.length; index += 1) {
        selectColor[index].classList.remove('selected');
}
event.target.classList.toggle('selected');
}
    for (let index = 0; index < selectColor.length; index += 1) {
        selectColor[index].addEventListener('click', selectedColor);
}