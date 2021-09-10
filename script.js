let colorPalette = document.querySelector('#color-palette')
let color = document.querySelectorAll('.color');

let pixelBoard = document.querySelector('#pixel-board')

// Requisito 7
colorPalette.addEventListener('click', function (event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }

  if ( event.target.classList.contains( 'color' ) ) {  
    event.target.classList.add('selected');
  }
});

// Requisito 8
pixelBoard.addEventListener('click', function (event) {
  if ( event.target.classList.contains( 'pixel' ) ) {
    let selected = document.querySelector('.selected');
    let cor = getComputedStyle(selected).backgroundColor;
    event.target.style.backgroundColor = cor;
  }
});
