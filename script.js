const cor = document.querySelectorAll('.color');
const linhaPixel = document.querySelectorAll('.linhaPixel');
const coresPaleta = ['preto', 'verde', 'azul', 'violeta'];
// Adiciona as cores na paleta de cor
function adicionarCorPaleta(classeCor) {
  for (let index = 0; index < classeCor.length; index += 1) {
    classeCor[index].classList.add(coresPaleta[index]);
  }
}
adicionarCorPaleta(cor);
// Cria uma caixa com base nas diferentes classes
function criaQuadrado(className) {
  const box = document.createElement('div');
  box.className = className;
  return box;
}
// Percorre as linhas com a div que tem a classe com o nome pixel e preenche a linha
function percorrePixel(classePixel) {
  for (let index = 0; index < classePixel.length; index += 1) {
    for (let contador = 0; contador < classePixel.length; contador += 1) {
      const box = criaQuadrado('pixel');
      classePixel[contador].appendChild(box);
    }
  }
}
percorrePixel(linhaPixel);
