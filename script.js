// Funcao para criar elementos fora do dom, recebe como parametros respectivamente o tipo do elemento, o texto, as classes, e o id, se passar '' como parametro ele nao adiciona o parametro em questao.
function newChild(type, text, classs, id) {
  const newChildItem = document.createElement(type);
  newChildItem.innerText = text;
  if (classs !== '') {
    newChildItem.className = classs;
  }
  if (id !== '') {
    newChildItem.id = id;
  }
  return newChildItem;
}

// funcao para criar linhas onde serao colocados os pixels
function createLines() {
  const board = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    board.append(newChild('div', '', 'line', ''));
  }
}

// funcao para colocar pixels a serem pintados nas linhas
function createPixels() {
  const lines = document.querySelectorAll('.line');
  for (let indexLines = 0; indexLines < lines.length; indexLines += 1) {
    for (let index = 0; index < 5; index += 1) {
      lines[indexLines].append(newChild('div', '', 'pixel white', ''));
    }
  }
}

// funcao para mudar a classe do elemento da palheta que voce clicar para ter selected, e remove do antigo que a possuia
function changeSelectedPosition(event) {
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

// funcao para pintar os pixels com a cor do elemento da palheta de cores que possui a classe selected
function paintPixels(event) {
  if (event.target.classList.contains('pixel')) {
    const selectedColor = document.querySelector('.selected');
    const classColor = selectedColor.classList;
    event.target.classList.remove(event.target.classList[1]);
    event.target.classList.add(classColor[1]);
  }
}

/* Metodo event bubbling adquirido atraves deste link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/ */
// evento que acontece quando clickamos em qualquer lugar da pagina
document.addEventListener('click', (event) => {
  changeSelectedPosition(event);
  paintPixels(event);
}, false);

// evento que acontece quando a pagina termina de carregar
window.onload = () => {
  createLines();
  createPixels();
};

// evento que acontece quando clicamos no botao limpar
document.querySelector('#clear-board').addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove(pixels[index].classList[1]);
    pixels[index].classList.add('white');
  }
});
