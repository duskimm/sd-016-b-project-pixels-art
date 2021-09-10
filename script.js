function criaHeader() {
  let titulo = document.querySelector('header');
  let criaH1 = document.createElement('h1');
  criaH1.innerText = 'Paleta de Cores';
  criaH1.id = 'title';
  titulo.appendChild(criaH1);
}
criaHeader();

function criaCores() {
  let cores = ['black', 'red', 'pink', 'green'];
  let quadrados = document.querySelectorAll('.color');
  for (let index in cores) {
    quadrados[index].style.backgroundColor = cores[index];
  }
}
criaCores();

function criaQuadro() {
  let localizaDiv = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    let criaUl = document.createElement('ul');
    criaUl.className = 'uls';
    localizaDiv.appendChild(criaUl);
    for(index2 = 0; index2 < 5; index2 += 1){
      localizaUl = document.querySelectorAll('.uls')[index];
      let criaLi = document.createElement('li');
      criaLi.className = 'pixel';
      localizaUl.appendChild(criaLi);
    }
  }
} criaQuadro();
