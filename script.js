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

//  6 Requisito
window.onload = function carregaPag(){
  
  let coresDiv = document.querySelectorAll('.color');
  coresDiv[0].classList.add('selected');
}
  // for (let index = 1; index < coresDiv.length; index += 1) {
  //   if (coresDiv[index].className == "selected") {
  //     coresDiv[index].classList.remove("selected");
  //     coresDiv[0].classList.add('selected');
  //   } 
  // }

  const colors = document.getElementsByClassName('color');

  function pegaCor(event) {
    for(let index = 0; index < colors.length; index += 1){
      colors[index].classList.remove('selected')
    }
    event.target.classList.add('selected')
  }

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', pegaCor);
  }
  
