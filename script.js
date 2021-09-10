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