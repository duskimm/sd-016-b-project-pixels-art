// Recebendo o elemento div color-palette.
const colorPalette = document.getElementById('color-palette');

// Função que cria cada div Color
function createDIVColor(classePrincipal, classeColor) {
  const elementColor = document.createElement('div');
  elementColor.classList.add(classePrincipal);
  elementColor.classList.add(classeColor);

  colorPalette.appendChild(elementColor);
}

// criando as divs que conterão as cores da paleta.
function addClassColor(cores) {
  // Percorro o array e passo e chamo a função que cria a div passando para ela a classe padrão color e dinamicamente a cor do array
  cores.forEach((key) => {
    createDIVColor('color', key);
  });
}

// Sugestão fazer ao final do exercício colocar a cor via JS assim semppre que eu adicionar uma cor ao array ele já vai ser incluido mesmo sem ter a classe lá no css.
// Cores que eu vou usar para criar as divs da paleta dinamicamente.
const colors = ['black', 'red', 'yellow', 'pink'];

// Chama a função que adiciona a classe de cor ao criar um elemento da paleta
addClassColor(colors);
