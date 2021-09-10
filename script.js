function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
  // console.log(selectedColor);
  // console.log(event.target);
}

function paintPixel(event) {
  const selected = document.querySelector('.selected');
  const color = window.getComputedStyle(selected).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

window.onload = function main() {
  const paletaDeCores = document.querySelectorAll('.color');
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', selectColor);
  }

  // adicionar evento para que ao clicar em um pixel ele seja preenchido
  // com a cor selecionada
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
};
