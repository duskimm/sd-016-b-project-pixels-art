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


window.onload = function carregaPag(){
  
  let coresDiv = document.querySelectorAll('.color');
  coresDiv[0].classList.add('selected');

  // for (let index = 1; index < coresDiv.length; index += 1) {
  //   if (coresDiv[index].className == "selected") {
  //     coresDiv[index].classList.remove("selected");
  //     coresDiv[0].classList.add('selected');
  //   } 
  // }

}
