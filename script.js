/**
 * Criar um botão de reset que já vai servir para iniciar com a cor branca
 *
*/
const mainContent = document.querySelector('.main-content');
const divColorClass = document.getElementsByClassName('color');
const userCount = 5;

function defaultBoard(boardStyle) {
  const change = boardStyle;
  change.style.border = '1px solid black';
  change.style.width = '40px';
  change.style.height = '40px';
  change.style.padding = '15px';
  change.style.display = 'inline-block';
  change.style.backgroundColor = 'white';

  return boardStyle;
}

function createDiv(nameClass) {
  const genericDiv = document.createElement('div');
  genericDiv.className = nameClass;

  return genericDiv;
}

function createSectionId(nameId) {
  const genericSection = document.createElement('section');
  genericSection.id = nameId;

  return genericSection;
}

for (let index = 0; index < userCount; index += 1) {
  const sectionPixel = createSectionId('pixel-board');
  mainContent.appendChild(sectionPixel);
}

for (let indexX = 0; indexX < userCount; indexX += 1) {
  for (let indexY = 0; indexY < userCount; indexY += 1) {
    const divPixel = createDiv('pixel');
    const divFather = document.querySelectorAll('#pixel-board');
    defaultBoard(divPixel);
    divFather[indexY].appendChild(divPixel);
  }
}

const pixelBox = document.getElementsByClassName('pixel');
let colorTabela = 'black';

function inputColor(e) {
  e.style.backgroundColor = colorTabela;
}

function changeClass(cor) {
  let newString = '';
  for (let index = 0; index < divColorClass.length; index += 1) {
    if (divColorClass[index].className.includes('selected')) {
      newString = divColorClass[index].className.replace('selected', '');
      divColorClass[index].className = newString;
    } if (divColorClass[index].className.includes(cor)) {
      divColorClass[index].className = `color ${cor} selected`;
    }
  }
}

function getColorPalette(a) {
  if (a.target.className.includes('black')) {
    colorTabela = 'black';
    changeClass('black');
  } else if (a.target.className.includes('red')) {
    colorTabela = 'red';
    changeClass('red');
  } else if (a.target.className.includes('blue')) {
    colorTabela = 'blue';
    changeClass('blue');
  } else if (a.target.className.includes('green')) {
    colorTabela = 'green';
    changeClass('green');
  }
  return colorTabela;
}

const getColor = document.querySelectorAll('.color');

for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', (event) => {
    getColorPalette(event);
    console.log('click event');
  });
}

for (let index = 0; index < pixelBox.length; index += 1) {
  pixelBox[index].addEventListener('click', () => {
    inputColor(pixelBox[index]);
    console.log('click');
  });
}
