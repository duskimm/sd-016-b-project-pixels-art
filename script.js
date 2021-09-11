let capturaHeader = document.querySelector('header');
let criarTitulo = document.createElement('h1');
criarTitulo.id = 'title';
criarTitulo.innerHTML = 'Paleta de Cores';
capturaHeader.appendChild(criarTitulo);

let capturarSection = document.querySelector('section');
capturarSection.id = 'color-palette';
let coresIndividuais = 4;
for (let index = 0; index < coresIndividuais; index += 1){
    let criarDivsPaleta = coresIndividuais;
    criarDivsPaleta = document.createElement('div');
    criarDivsPaleta.className = 'color';
    capturarSection.appendChild(criarDivsPaleta);
}

let configurarCoresPaletas = document.querySelectorAll('.color');
configurarCoresPaletas[0].style.backgroundColor = 'black';
configurarCoresPaletas[1].style.backgroundColor = 'red';
configurarCoresPaletas[2].style.backgroundColor = 'blue';
configurarCoresPaletas[3].style.backgroundColor = 'green';

let capturarSectionQuadro = document.querySelector('#pixel-board');
let elementosQuadro = 25;
for (let index = 0; index < elementosQuadro; index +=1){
    let criarDivsQuadro = elementosQuadro;
    criarDivsQuadro = document.createElement('div');
    criarDivsQuadro.className = 'pixel';
    capturarSectionQuadro.appendChild(criarDivsQuadro);      
}






