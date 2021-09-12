
//exercicio 5.2
const elementPixelBoard = document.createElement('div');
elementPixelBoard.id = 'pixel-board';
document.body.appendChild(elementPixelBoard);

//exercicio 4.2 / 5.2
const line = 5;
const column = 5;
for ( index = 0; index < line; index += 1) {
  for ( index2 = 0; index2 < column; index2 += 1 ) {
    const elementPixel = document.createElement('div');
    elementPixel.classList.add('pixel')
    elementPixelBoard.appendChild(elementPixel)
  }
}

// //exrcicio 5.3
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const fourthLi = document.getElementById('fourth-li');
const input = document.getElementById('input');

function SelectinColor(event) {
  const elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
  input.value = '';
}

firstLi.addEventListener('click', SelectinColor);
secondLi.addEventListener('click', SelectinColor);
thirdLi.addEventListener('click', SelectinColor);
fourthLi.addEventListener('click', SelectinColor);
// REQUISITO 6 FEITO