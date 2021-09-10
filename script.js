window.onload = function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
};

const arrayCores = ['black', 'red', 'blue', 'green'];
const linhasColunas = 5;

// Criando as divs da paleta
for (let index = 0; index < arrayCores.length; index += 1) {
  let paleta = document.querySelector("#color-palette");
  let cor = arrayCores[index];
  let elemento = document.createElement('div');
  elemento.id = 'color-palette';
  elemento.className = "color " + cor;
  // console.log(elemento);
  paleta.appendChild(elemento);
}

// Criando o quadro de pixels
for (let linha = 0; linha < linhasColunas; linha += 1) {
  let quadro = document.querySelector('#pixel-board');
  let linhaQuadro = document.createElement('div');
  // linhaQuadro.className = 'pixel' //linha' + (linha + 1); 
  linhaQuadro.id = 'linha';
  quadro.appendChild(linhaQuadro);
}

function appendPixel() {
  let pixels = document.querySelectorAll('#linha');
  // console.log(pixels.length)
  for (let index = 0; index <= pixels.length; index += 1) {
    let posicaoLinha = pixels[index];
    console.log(posicaoLinha);
    for (let segundoIndex = 0; segundoIndex < pixels.length; segundoIndex += 1) {
      // console.log(pixels[segundoIndex]);      
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      // console.log(pixel);
      posicaoLinha.appendChild(pixel);
    }
  }
}

appendPixel();
