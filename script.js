// window.onload = function () {
//   //colorBlack();
// };


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

// selecionando a cor preta do span com a classe selected
function colorBlack() {
  let colorFixed = document.getElementsByTagName('span')[0];
  colorFixed.className = 'color selected';
}
colorBlack();

// criar o Botão Clear
function createButtonClear() {
  const elementFather = document.querySelector('main');
  let createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerText = 'Limpar';
  elementFather.appendChild(createButton);
}
createButtonClear()

// limpar o quadro pixel co clicar no button
  let clearPixels = document.getElementById('clear-board');
  function clearBoarder() {
    let clearDivs = document.getElementsByClassName('pixel');
    for (let index =0 ; index < clearDivs.length; index += 1){
      clearDivs[index].style.backgroundColor = 'white';
    }
  }
  clearPixels.addEventListener('click', clearBoarder);


// pintar os pixels de preto ao carregar a página
function colorBlackReload(){
  let pixels = document.getElementsByClassName('pixel');
  pixels.style.backgroundColor = 'black'
}


//criar a div com id "pixel-board'
function createDivFathetBoardPixel() {
  const elementFather = document.querySelector('main');
  let createDiv = document.createElement('div');
  createDiv.id = 'pixel-board';
  elementFather.appendChild(createDiv);
}
createDivFathetBoardPixel()

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
      divPai.appendChild(element);
    }
  }
}
createboardPixel(5);

// remover o selected de onde estava:
// Auxilio do Luis Gustavo no for.
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

// selecionar cor e pintar os pixels ao clicar. Ajuda questão 10 do calendário.
// auxilio grupo de estudos.
function paintSelected() {
  let paintColorSelected = document.querySelector('.selected');
  //console.log(paintColorSelected.style.backgroundColor);

  paintColorSelected.addEventListener('click', function (event) {
    event.target.style.backgroundColor;
  });
}
paintSelected();

function printColor (){
  // Auxilio Grupo de estudo sabado noite: Luis Wanderson.
  let pixels = document.getElementsByClassName('pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].addEventListener('click', function(event) {
    let paintColorSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = paintColorSelected.style.backgroundColor;
    });
  }
}
printColor();