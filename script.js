const divPrincipal = document.getElementById('container');
const paleta = document.getElementById('color-palette');

//Cria paleta de cores e seta a cor preta com a classe selected
function coresPaleta(list,list2) {
    for (let i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = list2[i];
        if(list2[i] == 'black'){
          list[i].className += ' selected';
        }
    }
}

//gera cor aleatoria para a paleta de cores
function geraCorAleatoria(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  return `rgb(${r}, ${g}, ${b})`;
}

//cria paleta de cores com as corres da lista
coresPaleta(paleta.children,['black',geraCorAleatoria(),geraCorAleatoria(),geraCorAleatoria()]);

//cria a tabela
const tabela = document.createElement('table');
tabela.setAttribute('id','pixel-board');
divPrincipal.appendChild(tabela);
for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');
     tabela.appendChild(row);
    for (let y = 0; y < 5; y++) {
        const celula = document.createElement('td');
         celula.setAttribute('class','pixel');
        row.appendChild(celula);
    }
}

// reseta a classe da paleta de cores
function resetClass(lista){
  for(let i = 0; i< lista.length;i++){
    lista[i].className = 'color';
  }
}
// cria lista de todos os elementos com classe pixel e outra lsita com todos os elementos com classe color
const listaPixel = document.getElementsByClassName('pixel');
const listaCores = document.getElementsByClassName('color');

// seta a cor inicial como preto
let corAtual = 'black';

//adiciona evento de mudança da cor atual a todos os elementos com a classe color e adiciona a classe selected a cor selecionada
for (let i = 0; i < listaCores.length; i++) {
    listaCores[i].addEventListener('click',function(event) {
      corAtual = event.target.style.backgroundColor;
      resetClass(listaCores);
      event.target.className += ' selected';
    }) 
}

// adiciona o evento de colorir com a cor atual a todos os elementos com classe pixel
for (let i = 0; i < listaPixel.length; i++) {
    listaPixel[i].addEventListener('click',function(event) {
        event.target.style.backgroundColor = corAtual;;
    })
}

// criando botao de reset
const botaoReset = document.createElement('button');
botaoReset.setAttribute('id','clear-board');
botaoReset.innerText = 'Reset';
divPrincipal.appendChild(botaoReset);

//adiciona evento de resetar cor dos pixels ao botao reset
const btn = document.getElementById('clear-board');
btn.addEventListener('click',function(){
  for(let i = 0; i < listaPixel.length; i++){
    listaPixel[i].style.backgroundColor = 'white';
  }
})
