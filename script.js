const palleteColor = document.getElementById('color-palette');
const boardPixel = document.getElementById('pixel-board')

// criar div para armazenar as cores do projeto, com classe "color" e ainda colocar a cor de forma dinâmica.
function createColorsPallete(color) {
  let createElement = document.createElement('span');
  createElement.className = 'color';
  createElement.style.backgroundColor = color;
  palleteColor.appendChild(createElement);
};
createColorsPallete('black');
createColorsPallete('red');
createColorsPallete('orange');
createColorsPallete('yellow');
createColorsPallete('green');
createColorsPallete('blue');
createColorsPallete('purple');
createColorsPallete('pink');

// criar quadro Pixel com 5 elementos de largura e 5 elementos de altura. Fazer a lógica do quadrado de asteriscos.
function createboardPixel(number) {
  // for para criar as linhas do Quadro Pixel.
  for (let index = 1; index <= number; index += 1){
    let createElement = document.createElement('div');
    createElement.className = 'pixel';
    createElement.style.backgroundColor = 'white';
    boardPixel.appendChild(createElement);
  }
  // for para criar as colunas do Quadro Pixel.
  // for (let index = 0; index < number, index += 1){
  //   let createElement = document.createElement('div');
  //   createElement.className = 'pixel';
  //   createElement.style.backgroundColor = 'white';
  //   boardPixel.appendChild(createElement);
  // }

}
createboardPixel(5);

// function criaQuadrado (number){
//   let n = number;
//   let simbolo = "*";
//   let linhaDeAsteriscos = "";
  
//   for (let index = 0; index < n; index += 1) {
//     linhaDeAsteriscos = linhaDeAsteriscos + simbolo;  
//   }
  
//   for (let index = 0; index < n; index += 1){
//     console.log(linhaDeAsteriscos);
//   }

// }
// criaQuadrado(5);





