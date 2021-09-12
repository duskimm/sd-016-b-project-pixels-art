function title (){
  let body = document.querySelector('body');
  let h1 = document.createElement('h1');
  h1.innerText = "Paleta de Cores";
  h1.id = "title";
  body.appendChild(h1);
};
title();

function palette (){
  let body = document.querySelector('body');
  let div = document.createElement('div');
  div.id = "color-palette";
  body.appendChild(div)
}
palette();

function color1 (){
  let div = document.querySelector('#color-palette')
  let div1 = document.createElement('div')
  div1.id = 'color1'
  div1.className = "color";
  div.appendChild(div1)
}
color1 ()

function color2 (){
  let div = document.querySelector('#color-palette')
  let div1 = document.createElement('div')
  div1.id = 'color2'
  div1.className = "color";
  div.appendChild(div1)
}
color2 ()

function color3 (){
  let div = document.querySelector('#color-palette')
  let div1 = document.createElement('div')
  div1.id = 'color3'
  div1.className = "color";
  div.appendChild(div1)
}
color3 ()

function color4 (){
  let div = document.querySelector('#color-palette')
  let div1 = document.createElement('div')
  div1.id = 'color4'
  div1.className = "color";
  div.appendChild(div1)
}
color4 ()


function quadroPixel (){
  let body = document.querySelector('body');
  let div = document.createElement('div');
  div.id = "pixel-board";
  body.appendChild(div)
}
quadroPixel();

// Desafio 4 e 5

//  criei uma variável para guardar o elemento Pai, nesse caso pixel-board
let elementoPixelBoard = document.querySelector('#pixel-board');

function criarLinhas() {

  // Primeiro criei as div das linhas 
    for (let index = 0; index < 5; index += 1) {
    let linhas = document.createElement('div');
  
    // Fiz a apende das linhas com a pixel-board 
    elementoPixelBoard.appendChild(linhas);
  
    //  agora criei as div das colunass
    for (let colunas = 0; colunas < 5; colunas += 1) {
      let colunas = document.createElement('div');
  
      // aqui define a classe 'pixel' para todas as colunass
      colunas.className = 'pixel';
  
      // aqui fiz o apende das linhas com as colunas, definindo as colunas como filhas das linhas
      linhas.appendChild(colunas);
    }
  }
}

criarLinhas();

