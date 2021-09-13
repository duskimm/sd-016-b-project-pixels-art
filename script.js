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

function randomColor() {
  const colorPalette = ['Crimson', 'Tomato', 'Khaki', 'Moccasin', 'teal', 'Lavender', 'PowderBlue'];
  const redColors = document.querySelectorAll('.randomColor');
  for (let loop = 0; loop < redColors.length; loop += 1) {
    const corAtual = Math.floor(Math.random() * colorPalette.length);
    redColors[loop].style.backgroundColor = `${colorPalette[corAtual]}`;
  }
}
randomColor();

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
    const gridLine = document.createElement('li');
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
  const nodeSize = document.querySelectorAll('.ul-pixel-line');
  for (let pas = 0; pas < nodeSize.length; pas += 1) {
    const lineAtual = nodeSize;
    for (let del = 0; del < lineAtual.length; del += 1) {
      const kill = lineAtual[del];
      lineAtual.removeChild(kill);
    }
  }
  const nodePhater = document.querySelector('#pixel-board');
  const nodeInsistente = document.querySelector('.ul-pixel-line');
  nodePhater.removeChild(nodeInsistente);
}

function newGrid(num) {
  const size = num;
  rmvGrid();
  makeGrid(size);
}

function makeImputSize() {
  const loc = document.querySelector('#inputs');
  const impt = document.createElement('input');
  impt.id = 'board-size'; impt.className = 'imputes';
  impt.type = 'imput'; impt.placeholder = 'Insira o tamanho da grid';
  impt.maxLength = '2';
  loc.appendChild(impt);
}

function maxNum(numSize) {
  let num = numSize;
  if (num < 5) {
    num = 5;
    newGrid(num);
  }
  if (num > 50) {
    alert('Board inválido!');
    return;
  }
  newGrid(num);
}

function validImput(imputn) {
  let numVBalid = imputn;
  if (numVBalid === '') {
    alert('Board inválido!');
    return;
  }
  if (numVBalid < 5) {
    numVBalid = 5;
    alert('O menor valor permitido é 5!');
    return maxNum(numVBalid);
  }
  return maxNum(numVBalid);
}

function numImput() {
  const imptNUm = document.querySelector('#board-size').value;
  return validImput(imptNUm);
}

makeImputSize();

function makeBtnNumGrid() {
  const locateBtn = document.querySelector('#inputs');
  const btnVQV = document.createElement('button');
  btnVQV.id = 'generate-board';
  btnVQV.innerText = 'VQV';
  btnVQV.setAttribute('type', 'button', 'class', 'impurus');
  locateBtn.appendChild(btnVQV);
  btnVQV.addEventListener('click', numImput);
}

makeBtnNumGrid();

makeGrid(5);
