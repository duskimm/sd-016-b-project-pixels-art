document.getElementById('black').classList.add('selected');

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
    event.target.id = selected.id;
  })
}