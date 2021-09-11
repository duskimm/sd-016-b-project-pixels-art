function corAleatoriaLista(lista) {
  const cores = lista || [
    'black', 'silver', 'gray', 'white',
    'brown', 'red', 'purple', 'fuchsia',
    'green', 'lime', 'olive', 'yellow',
    'navy', 'blue', 'teal', 'cyan'];
  return cores[Math.floor(Math.random() * 100) % cores.length];
}

function removeElementosPelaClasse(classe) {
  let e = document.getElementsByClassName(classe);
  while (e.length) {
    e[0].remove();
    e = document.getElementsByClassName(classe);
  }
}

window.onload = function (params) {
  let paletaN = 4;
  let linhas = 5;
  let unica = [];

  // configura a paleta de cores
  for (let i = 0; i < paletaN; i += 1){
      let div = document.createElement('div');
      let cor = corAleatoriaLista();
      while(cor == 'white' || cor == 'black' ||
          unica.includes(cor)){
          cor = corAleatoriaLista();
      }
      unica.push(cor);
      div.style.backgroundColor = cor;
      div.classList.add('color');
      
      //se for o primeiro é preto e classe += 'selected'
      if (i == 0) {
          div.classList.add('selected');
          div.style.backgroundColor = 'black';
      }
      document.querySelector('#color-palette').appendChild(div);
  }

  // gera o quadro
  function geraQuadro() {
      for (let j = 0; j < linhas; j += 1){
          let linha = document.createElement('div');
          linha.classList.add('linha');
          linha.style.width = linhas * 42 + 'px';
          for (let i = 0; i < linhas; i += 1) {
              let div = document.createElement('div');
              div.style.backgroundColor = 'white';//corAleatoriaLista();
              div.classList.add('pixel');
              linha.appendChild(div);
          }
          document.querySelector('#pixel-board').appendChild(linha);
      }
  }
  geraQuadro();

  //document.querySelector('#pixel-board').style.width = linhas * 42 + 10 + 'px';

  // habilita pintar
  document.querySelector(
      '#pixel-board').addEventListener('click', function(e){
      if (e.target.classList.contains('pixel')) {
          e.target.style.backgroundColor = cor_selecionada()
      }
  })

  function cor_selecionada(){
      return document.querySelector(
          '.selected').style.backgroundColor;
  }

  // habilita selecionar cor
  document.querySelector('#color-palette'
      ).addEventListener('click', function(e){
      if(e.target.classList.contains('color')) {
          document.querySelector('.selected').classList.remove('selected');
          e.target.classList.add('selected');
      }
  })

  // habilita limpar o quadro
  function limparQuadro(e) {
    let a = document.getElementsByClassName('pixel');
    for (let i of a) {
      i.style.backgroundColor = 'white';
    }
  }

  document.querySelector('#clear-board').addEventListener(
      'click', limparQuadro,
  );

  // implementa mudar tamanho do quadro
  function resetQuadro() {
    let n = document.querySelector('#board-size').value;
    if (n.length === 0) { alert('Board inválido!'); return; }
    if (n > 50) n = 50;
    if (n < 5) n = 5;
    linhas = n;
    removeElementosPelaClasse('pixel');
    removeElementosPelaClasse('linha');
    geraQuadro();
  }

  document.querySelector('#generate-board').addEventListener(
    'click', resetQuadro,
  );
};

// não esqueça a linha em branco no final do arquivo
