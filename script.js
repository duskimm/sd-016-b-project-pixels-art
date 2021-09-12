let caixaDePixels = document.getElementById('pixel-board');

function caixaPixel(nPixels, quadrados){
  for(let i = 0; i < nPixels; i += 1){
    let linhaDePixel = document.createElement('div');
    for(let j = 0; j < quadrados; j += 1){
        let quadradoDePixel = document.createElement('div');
        quadradoDePixel.className = 'pixel'
        linhaDePixel.appendChild(quadradoDePixel);
    }
    caixaDePixels.appendChild(linhaDePixel);
  }
}
caixaPixel(5, 5);

function addRemoveClass(event){
    const pegaCor = document.querySelector('.selected');
    pegaCor.classList.remove('selected');
  event.target.classList.add('selected');
}

preto.addEventListener('click', addRemoveClass);
cinza.addEventListener('click', addRemoveClass);
vermelho.addEventListener('click', addRemoveClass);
roxo.addEventListener('click', addRemoveClass);
