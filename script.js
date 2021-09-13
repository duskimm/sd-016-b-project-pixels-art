// variavel de localização do Board
// const gridlocal = document.querySelector('.color-pallete');
// const quadro = document.createElement('div');
// quadro.id = 'pixel-board';
// gridlocal.appendChild(quadro);

// Criar a páleta de cores
// primeira cor sempre sera preta
// const paletta = document.getElementById('color-palette');

// const cor1 = document.createElement('div'); cor1.id = 'cor1';
// cor1.className = 'color1 color'; paletta.appendChild(cor1);

// // cores secundarias quereceberão o valor aleatoreo
// const cor2 = document.createElement('div'); cor2.id = 'cor2';
// cor2.className = 'color'; paletta.appendChild(cor2);
// const cor3 = document.createElement('div'); cor3.id = 'cor3';
// cor3.className = 'color'; paletta.appendChild(cor3);
// const cor4 = document.createElement('div'); cor4.id = 'cor4';
// cor4.className = 'color'; paletta.appendChild(cor4);

// paleta de cores a serem usadas - a primeira sempre sera black
function randomColor(tam) {
  const arg = tam;
  const colorPalette = ['Crimson', 'Tomato', 'Khaki', 'Moccasin', 'teal', 'Lavender', 'PowderBlue'];
  const selectQPL = document.querySelectorAll('.color');
  for (let ind = 0; ind < arg; ind += 1) {
    const corActual = Math.floor(Math.random() * colorPalette.length);
    selectQPL[ind].style.backgroundColor = colorPalette[corActual];
  }
}

// montar a grid conforme valor passado para a função
function makeGrid(gSize) {
  const localGame = document.getElementById('pixel-board');
  const sizeGB = gSize;
  for (let line = 0; line < sizeGB; line += 1) {
    const gridLine = document.createElement('ul');
    gridLine.className = 'ul-pixel-line';
    localGame.appendChild(gridLine);
    for (let bloc = 0; bloc < sizeGB; bloc += 1) {
      const box = document.createElement('li');
      box.className = 'pixel';
      gridLine.appendChild(box);
    }
    const lin = document.createElement('br');
    gridLine.appendChild(lin);
  }
}

// start
// instance Color Palette.
// makePaleteColor(3);
// cria a grid valor inicial 5
makeGrid(5);
// copiar cores para colar no grid

// tamanho da grid pegar o valor do input e jogar como parametro da function makeGrid(*)
