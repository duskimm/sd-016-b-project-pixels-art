window.onload = function () {
  //exrcicio 5.2
  const elementPixelBoard = document.createElement('div');
  elementPixelBoard.id = 'pixel-board';
  document.body.appendChild(elementPixelBoard);

  //exrcicio 5.2
  for ( index = 0; index < 25; index += 1) {
    const elementPixel = document.createElement('div');
    elementPixel.classList.add('pixel')
    elementPixelBoard.appendChild(elementPixel)
  }

  //exrcicio 5.2







  

  //exrcicio 5.3
  // function handleChangeTech(event) {
  //   const colorElement = document.querySelector('selected');
  //   colorElement.classList.remove('selected')
  //   event.target.classList.add('selected')
  //   Input.valeu = '';
  // }

  // firstColor.addEventListener('click', handleChangeTech);
  // secondColor.addEventListener('click', handleChangeTech);
  // thirdColor.addEventListener('click', handleChangeTech);
  // fourthColor.addEventListener('click', handleChangeTech);






















}