function rmvSelect() {
  const atualSelect = document.querySelector('.selected');
  atualSelect.classList.remove('selected');
}

function addClsSelect(event) {
  const atualColor = event.target;
  rmvSelect();
  atualColor.classList.add('selected');
}

function selectColor() {
  const colors = document.querySelectorAll('.color');
  for (let ind = 0; ind < colors.length; ind += 1) {
    colors[ind].addEventListener('click', addClsSelect);
  }
}

function selectAleatoreColor() {
  const colorPalette = ['Crimson', 'Tomato', 'Khaki', 'Moccasin', 'teal', 'Lavender', 'PowderBlue'];
  const redColors = document.querySelectorAll('.randomColor');
  for (let loop = 0; loop < redColors.length; loop += 1) {
    const corAtual = Math.floor(Math.random() * colorPalette.length);
    redColors[loop].style.backgroundColor = `${colorPalette[corAtual]}`;
  }
}
selectAleatoreColor();

selectColor();

function changerColor(evt) {
  const pixelAtual = evt.target;
  const newColor = document.querySelector('.selected');
  pixelAtual.style.backgroundColor = newColor.style.backgroundColor;
}

function clearAll() {
  const pixelEraze = document.querySelectorAll('.pixel');
  for (let clin = 0; clin < pixelEraze.length; clin += 1) {
    pixelEraze[clin].style.backgroundColor = 'white';
  }
}

function makeBottonClear() {
  const locate = document.querySelector('#menis');
  const botCliear = document.createElement('button');
  botCliear.id = 'clear-board';
  botCliear.innerText = 'Limpar';
  locate.appendChild(botCliear);
  botCliear.addEventListener('click', clearAll);
}

makeBottonClear();

// montar a grid conforme valor passado para a função
function makeGrid(gSize) {
  const localGame = document.getElementById('pixel-board');
  const sizeGB = gSize;
  for (let line = 0; line < sizeGB; line += 1) {
    let gridLine = document.createElement('li');
    gridLine.className = 'ul-pixel-line';
    localGame.appendChild(gridLine);
    for (let bloc = 0; bloc < sizeGB; bloc += 1) {
      const box = document.createElement('li');
      box.className = 'pixel';
      box.addEventListener('click', changerColor);
      gridLine.appendChild(box);
    }
    const lin = document.createElement('br');
    gridLine.appendChild(lin);
  }
}

function rmvGrid() {
  const alvo = document.querySelector('#pixel-board');
  alvo.parentNode.removeChild(alvo);
}

function newGrid(num) {
  const size = num;
  rmvGrid();
  makeGrid(size);
}

function maxNum(numSize) {
  const num = numSize;
  if (num < 0) {
    alert('Board inválido!');
    return;
  }
  if (num > 50) {
    alert('Board inválido!');
    return;
  }
  newGrid(num);
}

function numImput() {
  const imptNUm = document.querySelector('#board-size').value;
  maxNum(imptNUm);
}

function makeImputSize() {
  const loc = document.querySelector('#inputs');
  const impt = document.createElement('input');
  impt.id = 'board-size';
  impt.setAttribute('type', 'imput');
  loc.appendChild(impt);
}

makeImputSize();

function makeBtnNumGrid() {
  const locateBtn = document.querySelector('#inputs');
  const btnVQV = document.createElement('button');
  btnVQV.id = 'generate-board';
  btnVQV.innerText = 'VQV';
  btnVQV.setAttribute('type', 'button');
  locateBtn.appendChild(btnVQV);
  btnVQV.addEventListener('click', numImput);
}

makeBtnNumGrid();

makeGrid(5);
