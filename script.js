let colorPalette = document.querySelector('#color-palette')
let color = document.querySelectorAll('.color');

// Requisito 7
colorPalette.addEventListener('click', function (event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }

  if ( event.target.classList.contains( 'color' ) ) {  
    console.log('hello');
    event.target.classList.add('selected');
  }
});
