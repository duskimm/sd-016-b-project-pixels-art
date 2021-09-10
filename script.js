// get the DOM elements
const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const button = document.getElementById('clear-board');

// add class 'selected'
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', addClassName);
  function addClassName (event) {
    let selected = event.target;
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove("selected");
    }
    selected.classList.add("selected");
	}}

// painting the pixels
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    let selected = event.target;
    let checkClass = document.querySelector('.selected');
    selected.style.backgroundColor = checkClass.classList[0];
  })
}

// cleaning the frame
button.addEventListener('click', function(){
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.backgroundColor = 'white';
  }
})
