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

function setInnerText(elementName, text) {
  const element = elementName;
  element.innerText = text;
}

const pageBody = document.querySelector('body');
const pageTitle = creatElementHTML('h1');

setId(pageTitle, 'title');

setInnerText(pageTitle, 'Paleta de Cores');

addElementToDOM(pageBody, pageTitle);
