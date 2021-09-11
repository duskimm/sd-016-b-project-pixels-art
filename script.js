document.getElementById('firstColor').classList.add('selected');

for (let index = 1; index <= 3; index++) {

  // função para gerar cores aleatorias retirada do site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

  function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  }
  document.getElementById('firstColor').style.backgroundColor = 'black';
  let color = document.getElementsByClassName('color');
  color[index].style.backgroundColor = gerar_cor();
}

let color = document.getElementById('color-palette')

color.addEventListener('click', function(event) {

  for (let index = 0; index < color.children.length; index++) {
    color.children[index].className = 'color';
  }
  event.target.classList.add('selected');

})


let pixel = document.querySelectorAll('.pixel');

for (let index = 0; index < pixel.length; index++) {
  pixel[index].addEventListener('click', function(event) {
    let selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  })
}


let botao = document.getElementsByTagName('button')[0];

botao.addEventListener('click', function() {
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = 'white';
  }
})