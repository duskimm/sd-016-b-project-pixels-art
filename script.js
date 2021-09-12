 // criando a matriz do quadro de pintura 5x5
// o loop abaixo cria as linhas
for (let i = 0; i < 5; i += 1) {

    const matriz = document.getElementById('pixel-board');
  
    const createLine = document.createElement('line');
  
    createLine.className = 'line';
  
    matriz.appendChild(createLine);
  
}
   
  const line = document.getElementsByClassName('line');

// o loop abaixo pega cada linha e acrescenta colunas. 
for (let i = 0; i < 5; i += 1) {
  
  for (let j = 0; j < 5; j += 1) {
  
    const createColumn = document.createElement('Column');
  
    createColumn.className = 'pixel';
  
    line[i].appendChild(createColumn);
  
  }
  
}

  