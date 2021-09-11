window.onload = function () {
  colorBlack();
};

const palleteColor = document.getElementById('color-palette');

// criar div para armazenar as cores do projeto, com classe "color" e ainda colocar a cor de forma dinâmica.
function createColorsPallete(color) {
  let element = document.createElement('span');
  element.classList = 'color';
  element.style.backgroundColor = color;
  palleteColor.appendChild(element);
};
createColorsPallete('black');
createColorsPallete('red');
createColorsPallete('orange');
createColorsPallete('yellow');
// createColorsPallete('green');
// createColorsPallete('blue');
// createColorsPallete('purple');
// createColorsPallete('pink');

// selecionando a cor preta do span com a classe selected
function colorBlack() {
  let colorFixed = document.getElementsByTagName('span')[0];
  colorFixed.className = 'color selected'
}

// criar quadro Pixel com 5 elementos de largura e 5 elementos de altura. Fazer a lógica do quadrado de asteriscos.
// Auxílio Airton Lopes para implementar a div line

function createboardPixel(number) {
  const boardPixel = document.querySelector('#pixel-board');
  // for para criar as linhas do Quadro Pixel.
  for (let index = 0; index < number; index += 1) {
    let div = document.createElement('div');
    boardPixel.appendChild(div);
    div.className = 'line';
    // for para criar as divs dentro da anterior.
    for (let index1 = 0; index1 < number; index1 += 1) {
      let divPai = document.querySelectorAll('.line')[index];
      let element = document.createElement('div');
      element.className = 'pixel';
      element.style.backgroundColor = 'white';
      divPai.appendChild(element);
    }
  }
}
createboardPixel(5);

// remover o selected de onde estava:
// Auxilio do Luis Gustavo.
let color = document.querySelectorAll('.color');
function alteraClass(event) {
  for (let index = 0; index < color.length; index += 1){
    color[index].classList.remove('selected');
  }
  //seleciona o evento para iniciar ao ser clicado. toggle: alterna as classes.
  event.target.classList.toggle('selected');
}
for (let index = 0; index < color.length; index += 1){
  color[index].addEventListener('click', alteraClass);
}

