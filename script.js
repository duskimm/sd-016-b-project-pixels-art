window.onload = function addClassSelected() {
  const blackInitial = document.getElementById('color-palette').firstElementChild; // recupera onde quero trabalhar, o primeiro filho do ID, no caso a cor black //
  blackInitial.classList.add('selected');
};
const palette = document.getElementById('color-palette'); // recupera onde quero trabalhar //
palette.addEventListener('click', (event) => { // seleciona o evento de "escuta" onde através do clique, ocorre a seguinte ação: //
  for (let index = 0; index < palette.children.length; index += 1) { // percorre todo o comprimento da paleta de cores //
    palette.children[index].classList.remove('selected'); // exclui a classe selected, e adiciona a classe selected ao ser clicado no novo evento de origem //
  }
  event.target.classList.add('selected');
});
