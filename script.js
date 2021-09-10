// functions for working with elements

function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function removeClass(element, delClass) {
  element.classList.remove(newClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

// universal variables

const user = {
  paintingColor: 'black'
};

// functions for the project

function generatorPixelLine() {
  const rows = getAll('.pixel-row');

  rows.forEach((row) => {
    for (let i = 0; i < 5; i += 1) {
      let pixel = createElement('div');
      addClass(pixel, 'pixel');
      plugHtml(row, pixel);
    }
  });
}

function generatorPixelRow() {
  const canvas = getOne('#pixel-board');

  for (let i = 0; i < 5; i += 1) {
    let row = createElement('div');
    addClass(row, 'pixel-row');
    plugHtml(canvas, row);
  }
}

function saveColor(color) {
  user.paintingColor = color;
}

function getColor() {
  const palette = getAll('.color');

  palette.forEach((color)  => {
    color.addEventListener('click', (event) => {
      let selectColor = getComputedStyle(event.target)['backgroundColor'];
      saveColor(selectColor);
    });
  });
}

function paintingPixel() {
  const allPixels = getAll('.pixel');

  allPixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      event.target.style.backgroundColor = user.paintingColor;
    })
  })
}

window.onload = () => {
  generatorPixelRow();
  generatorPixelLine();
  getColor();
  paintingPixel();
}