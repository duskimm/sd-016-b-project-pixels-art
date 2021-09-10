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

const pageBody = document.querySelector('body');
const pageTitle = creatElementHTML('h1');

setId(pageTitle, 'title');

setInnerText(pageTitle, 'Paleta de Cores');

addElementToDOM(pageBody, pageTitle);

const colorPalette = creatElementHTML('div');

setId(colorPalette, 'color-palette');

addElementToDOM(pageBody, colorPalette);

const numberOfColors = 5;

for (let index = 0; index < numberOfColors; index += 1) {
  const color = creatElementHTML('div');
  setClass(color, 'color');
  addElementToDOM(colorPalette, color);
}

const colorList = document.getElementsByClassName('color');

setClass(colorList[0], 'black');

setClass(colorList[1], 'blue');

setClass(colorList[2], 'pink');

setClass(colorList[3], 'yellow');

setClass(colorList[4], 'green');
