const colors = document.getElementsByClassName('color');

function colorSelection (whenClicked) {
    for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove('selected');
    }
    whenClicked.target.classList.add('selected');
}
for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', colorSelection);
}
// change pixel color:
const pixels = document.getElementsByClassName('pixels');
function paintPixel(whenClicked) {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', colorFill);
    }
}
function colorFill(whenClicked2) {
    const selectedColor = document.querySelector('.selected');
    whenClicked2.target.style.backgroundColor = selectedColor.style.backgroundColor;
}
paintPixel();