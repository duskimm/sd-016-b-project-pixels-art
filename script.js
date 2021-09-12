const body = document.getElementById('body');

function pageTitle(string) {
  let title = document.createElement('h1');
  title.id = 'title';
  title.innerText = string;
  body.appendChild(title);
}

pageTitle('Paleta de Cores');

function createPalette(colors){
  let paletteList = document.createElement('div');
  paletteList.id = 'color-palette';

  for (const color of colors) {
    let paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    paletteColor.style.backgroundColor = color;
    paletteList.appendChild(paletteColor);
  }

  body.appendChild(paletteList);
}

createPalette(['red', 'blue', 'green', 'yellow']);