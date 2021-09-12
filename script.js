const body = document.getElementById('body');

function pageTitle(string) {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = string;
  body.appendChild(title);
}

pageTitle('Paleta de Cores');

function createPalette(colors) {
  const paletteList = document.createElement('div');
  paletteList.id = 'color-palette';

  for (const color of colors) {
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    paletteColor.style.backgroundColor = color;
    paletteList.appendChild(paletteColor);
  }

  body.appendChild(paletteList);
}

createPalette(['red', 'blue', 'green', 'yellow']);

function addPaletteColor(color) {
  let paletteList = document.getElementById('color-palette');
  let newColor = document.createElement('div');
  newColor.className = 'color';
  newColor.style.backgroundColor = color;
  paletteList.prepend(newColor);
}

addPaletteColor('black');
