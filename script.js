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
  div1.className = "selected";
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

function criarLinhas() {

  //  criei uma variável para guardar o elemento Pai, nesse caso pixel-board
  let elementoPixelBoard = document.querySelector('#pixel-board');

  // criei as divs principais 
    for (let i = 0; i < 5; i += 1) {
    let divPrincipal = document.createElement('div');
  
    // Fiz a apende das divs principais com a pixel-board 
    elementoPixelBoard.appendChild(divPrincipal);
  
    //  agora criei as div filhas
    for (let j = 0; j < 5; j += 1) {
      let pixel = document.createElement('div');
  
      // aqui define a classe 'pixel' para todas as pixel
      pixel.className = 'pixel';
  
      // aqui fiz o apende das divs principais com as divs filhas (pixel)
      divPrincipal.appendChild(pixel);
    }
  }
}

criarLinhas();

// Desafio 6

function seis (){

  let seis = document.querySelector('#color1')
  seis.className += ' color'
}
seis ()
