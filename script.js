function creatElementHTML(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function addElementToDOM(parent, element) {
  parent.appendChild(element);
}

function setId(elementName, idName) {
  const element = elementName;
  element.id = idName;
}

function setClass(elementName, className) {
  const element = elementName;
  element.classList.add(className);
}

function setInnerText(elementName, text) {
  const element = elementName;
  element.innerText = text;
}

// Requisito 1
const pageBody = document.querySelector('body');
const pageTitle = creatElementHTML('h1');

setId(pageTitle, 'title');

setInnerText(pageTitle, 'Paleta de Cores');

addElementToDOM(pageBody, pageTitle);

// Requisitos 2 e 3
const colorPalette = creatElementHTML('div');

setId(colorPalette, 'color-palette');

addElementToDOM(pageBody, colorPalette);

const numberOfColors = 4;

for (let index = 0; index < numberOfColors; index += 1) {
  const color = creatElementHTML('div');
  setClass(color, 'color');
  addElementToDOM(colorPalette, color);
}

const colorList = document.getElementsByClassName('color');

setClass(colorList[0], 'black');

setClass(colorList[1], 'pink');

setClass(colorList[2], 'yellow');

setClass(colorList[3], 'green');

// Requisitos 4 e 5
const pixelsBoard = creatElementHTML('div');

setId(pixelsBoard, 'pixel-board');

addElementToDOM(pageBody, pixelsBoard);

const pixelsBoardSide = 5;

for (let line = 0; line < pixelsBoardSide; line += 1) {
  const pixelLine = creatElementHTML('div');
  setClass(pixelLine, 'board-line');
  addElementToDOM(pixelsBoard, pixelLine);

  for (let column = 0; column < pixelsBoardSide; column += 1) {
    const pixelColumn = creatElementHTML('div');
    pixelColumn.classList.add('pixel', 'white');
    addElementToDOM(pixelLine, pixelColumn);
  }
}

// Requisito 6
setClass(colorList[0], 'selected');

// Requisito 7
function selectColor(event) {
  const selectedColor = document.querySelector('.selected');

  if (event.target !== selectedColor) {
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

for (let index = 0; index < colorList.length; index += 1) {
  colorList[index].addEventListener('click', selectColor);
}

// Requisito 8
const pixels = document.getElementsByClassName('pixel');

function getSelectedColor() {
  for (let index = 0; index < colorList.length; index += 1) {
    if (colorList[index].classList.contains('selected')) {
      return colorList[index].classList.item(1);
    }
  }
}

function paintPixels(event) {
  const colorClass = getSelectedColor();

  if (!event.target.classList.contains(colorClass)) {
    event.target.classList.remove('white');
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(colorClass);
  }
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixels);
}

// Requisito 9
const clearButton = creatElementHTML('button');

setId(clearButton, 'clear-board');

setInnerText(clearButton, 'Limpar');

pageBody.insertBefore(clearButton, pixelsBoard);

function clearPixelsBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove(pixels[index].classList.item(1));
    setClass(pixels[index], 'white');
  }
}

clearButton.addEventListener('click', clearPixelsBoard);
