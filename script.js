/* Criando quadro de pixels */
const primeiraLinha = document.getElementById('first-line');
const segundaLinha = document.getElementById('second-line');
const terceiraLinha = document.getElementById('third-line');
const quartaLinha = document.getElementById('fourth-line');
const quintaLinha = document.getElementById('fifth-line');

function creatLine(divPai) {
  for (let c = 0; c < 5; c += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    divPai.appendChild(newDiv);
  }
}

creatLine(primeiraLinha);
creatLine(segundaLinha);
creatLine(terceiraLinha);
creatLine(quartaLinha);
creatLine(quintaLinha);

/* Criando a classe selected */
const paletaBlack = document.querySelector('black');
const paletaRed = document.querySelector('red');
const paletaBlue = document.querySelector('blue');
const paletaGreen = document.querySelector('green');

paletaBlack.className = 'selected';

function classSelected(paleta) {
  paleta.className = 'selected';    
}

classSelected(paletaBlack);
classSelected(paletaRed);
classSelected(paletaBlue);
classSelected(paletaGreen);
