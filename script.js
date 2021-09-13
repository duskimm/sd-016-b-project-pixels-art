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

function makeBotton() {
  const locate = document.querySelector('#menis');
  const botCliear = document.createElement('button');
  botCliear.id = 'clear-board';
  botCliear.innerText = 'Limpar';
  locate.appendChild(botCliear);
  botCliear.addEventListener('click', clearAll);
}

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

makeGrid(5);

makeBotton();
