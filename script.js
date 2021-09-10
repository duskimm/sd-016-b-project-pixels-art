const arrayCores = ['black', 'red', 'blue', 'green'];
const linhasColunas = 5;

// Criando as divs da paleta
for (let index = 0; index < arrayCores.length; index += 1) {
  let paleta = document.querySelector("#color-palette");
  let cor = arrayCores[index];
  let elemento = document.createElement('div');
  elemento.id = 'color-palette';
  elemento.className = "color " + cor;
  console.log(elemento);
  paleta.appendChild(elemento);
}

// for (let linha = 0; linha < linhasColunas; linha += 1) {
//   let quadro = document.querySelector('.quadro');
//   let linhaQuadro = document.createElement('div');
//   linhaQuadro.className = 'linha' + linha;
//   quadro.appendChild(linhaQuadro);
//   for (let coluna = linha; coluna < linhasColunas; coluna += 1) {

//   }
// }
