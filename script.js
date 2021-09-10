window.onload = function main() {
  const paletaDeCores = document.querySelectorAll('.color');

  function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(selectedColor);
    console.log(event.target);
  }

  // percorrer paleta e adicionar eventListener
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', selectColor);
  }

  // se uma cor for clicada, remover a classe selected da cor que a tiver,
  // e então adicionar a classe selected a essa cor
};
