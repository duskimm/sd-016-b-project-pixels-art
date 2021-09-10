const setColorsToDivs = document.getElementsByClassName('color');
setColorsToDivs[0].style.backgroundColor = 'black';
setColorsToDivs[1].style.backgroundColor = 'red';
setColorsToDivs[2].style.backgroundColor = 'blue';
setColorsToDivs[3].style.backgroundColor = 'green';

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  document.querySelector('#pixel-board').appendChild(pixel);
}

window.onload = function() {
  setColorsToDivs[0].classList.add('selected');
}
