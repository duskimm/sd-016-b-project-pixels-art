const colors = document.querySelectorAll('.color');
let corSelecionada = document.querySelector('.selected');
let corAtual = window.getComputedStyle(corSelecionada, null).getPropertyValue("background-color");
console.log(corAtual);

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', trocaSelected);
}

function trocaSelected(event) {
  let comSelected = document.querySelector('.selected');
  comSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
