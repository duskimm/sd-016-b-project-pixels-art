const arrayCores = ['preto', 'vermelho', 'azul', 'verde'];

// Criando as divs da paleta
for (let index = 0; index < arrayCores.length; index += 1) {
  let paleta = document.querySelector(".paleta");
  let cor = arrayCores[index];
  let elemento = document.createElement('div');
  elemento.className = cor;
  
}