/**
 * Criar um botão de reset que já vai servir para iniciar com a cor branca
 * 1 - O quadro deve ter 5 elementos de largura, e o elemento deve ter 25px
 *
*/
const mainContent = document.querySelector('.main-content');
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
