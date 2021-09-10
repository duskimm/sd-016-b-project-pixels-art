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
function createLines(lines) {
  const board = document.querySelector('#pixel-board');
  for (let index = 0; index < lines; index += 1) {
    board.append(newChild('div', '', 'line', ''));
  }
}

// funcao para colocar pixels a serem pintados nas linhas
function createPixels(coluns) {
  const lines = document.querySelectorAll('.line');
  for (let indexLines = 0; indexLines < lines.length; indexLines += 1) {
    for (let index = 0; index < coluns; index += 1) {
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

// Remove todos os pixels previamente existentes
function clearBoard() {
  const divBoard = document.querySelector('#pixel-board');
  while (divBoard.firstChild) {
    divBoard.removeChild(divBoard.firstChild);
  }
}

// configura o tamanho dos pixels
function setSizePixels() {
  const sizePixel = Math.floor(200 / sessionStorage.boardSize);
  const pixels = document.querySelectorAll('.pixel');
  console.log(sizePixel);
  console.log(pixels);
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.width = `${sizePixel}px`;
  }
}

/* Metodo event bubbling adquirido atraves deste link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/ */
// evento que acontece quando clickamos em qualquer lugar da pagina
document.addEventListener('click', (event) => {
  changeSelectedPosition(event);
  paintPixels(event);
}, false);

// evento para pegar a informacao colocada no input
document.querySelector('#board-size').addEventListener('input', (event) => {
  sessionStorage.boardSize = parseInt(event.target.value, 10);
});

// evento para setar o tabuleiro de acordo com o tamanho desejado
document.querySelector('#generate-board').addEventListener('click', () => {
  if (Number.isNaN(sessionStorage.boardSize) || (sessionStorage.boardSize <= 0)) {
    window.alert('Board inválido!');
  } else {
    clearBoard();
    createLines(sessionStorage.boardSize);
    createPixels(sessionStorage.boardSize);
    setSizePixels();
  }
});

// evento que acontece quando a pagina termina de carregar
window.onload = () => {
  sessionStorage.boardSize = '5';
  createLines(sessionStorage.boardSize);
  createPixels(sessionStorage.boardSize);
};

// evento que acontece quando clicamos no botao limpar
document.querySelector('#clear-board').addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove(pixels[index].classList[1]);
    pixels[index].classList.add('white');
  }
});
