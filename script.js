const cores = document.querySelector('#color-palette');
const cor = document.querySelectorAll('.color'); //NodeList 0-black 1-lightblue 2-red 3-pink

function selecionarCor(e) {
  for (let i = 0; i < cor.length; i+=1)
  if (cor[i].classList.contains('selected')){
    cor[i].classList.remove('selected')
  } e.target.classList.add('selected')
}

cores.addEventListener('click', selecionarCor);

