const color0 = document.querySelector('.color0');
    color0.classList.add('selected');

const allColors = ['color0', 'color1', 'color2', 'color3'];



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

//requisito 8

const pixelColor = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelColor.length; i += 1) {
  pixelColor[i].addEventListener('click', (addColor) => {
    const selectPixelColor = document.querySelector('.selected');
    const getPixelColor = addColor.target;
    getPixelColor.style.backgroundColor = window.getComputedStyle(selectPixelColor).backgroundColor;
  });
}