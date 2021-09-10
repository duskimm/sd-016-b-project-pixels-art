function quadroPixel(number) {
  const pixelBoard = document.querySelector('#pixel-board')
  for (let index = 0; index < number; index += 1) {
    let quadroB = document.createElement('div')
    quadroB.className = 'pixel'
    quadroB.style.backgroundColor = 'white';
    pixelBoard.appendChild(quadroB)
  }
}
quadroPixel(25)