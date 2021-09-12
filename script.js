// window.onload = function () {
//   //colorBlack();
// };
//let number = 5;

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

//criar a div com id "container"
function createDivContainer() {
  const elementFather = document.querySelector('main');
  let createDiv = document.createElement('div');
  createDiv.id = 'container';
  elementFather.appendChild(createDiv);
}
createDivContainer();

//criar a input com id "board-size"
function createInputText() {
  const elementFather = document.querySelector('#container');
  let createInput = document.createElement('input');
  createInput.id = 'board-size';
  createInput.placeholder = 'Adicione um número';
  createInput.type = 'number';
  createInput.min = '1';
  elementFather.appendChild(createInput);
  //document.querySelector('#board-size').value = ;
}
createInputText();


//-> recuperar o valor (createInput.innerText = input.value;) -> tratar o valor e recuperar o novo quadro com os tamanhos -> 
// fazer remove

// criar button com id 'button'
function createButtonVQV() {
  const elementFather = document.querySelector('#container');
  let createButton = document.createElement('button');
  createButton.id = 'generate-board';
  createButton.innerText = 'VQV';
  elementFather.appendChild(createButton);
}
createButtonVQV();

// criar o Botão Clear
function createButtonClear() {
  const elementFather = document.querySelector('#container');
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
  for (let index = 0; index < clearDivs.length; index += 1) {
    clearDivs[index].style.backgroundColor = 'white';
  }
}
clearPixels.addEventListener('click', clearBoarder);

// pintar os pixels de preto ao carregar a página
function colorBlackReload() {
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
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  //seleciona o evento para iniciar ao ser clicado. toggle: alterna as classes.
  event.target.classList.toggle('selected');
}

for (let index = 0; index < color.length; index += 1) {
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

function printColor() {
  // Auxilio Grupo de estudo sabado noite: Luis Wanderson.
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let paintColorSelected = document.querySelector('.selected');
      event.target.style.backgroundColor = paintColorSelected.style.backgroundColor;
    });
  }
}
printColor();

// criar funcao para recuperar o valor do input ao clicar o botao com id generate-board (VQV) 
// pesquisa no site: https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements
// function valueInput() {
//   let valueInput = document.querySelector('#board-size').value;
//   let numberInput = parseInt(valueInput);
//   let buttonValue = document.querySelector('#generate-board');
//   buttonValue.addEventListener('click', function () {
//       if(numberInput === ''){
//         createboardPixel(5)
//       } else {
//         createboardPixel(numberInput);
//       }
//   });
// }
// valueInput();