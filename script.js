window.onload = function () {
  const cor = document.querySelectorAll('.color');

 
  function adicionarCorPaleta(classeCor) {
    for (let index = 0; index < classeCor.length; index += 1) {
      const coresPaleta = ['ouro', 'verde', 'azul', 'violeta'];
      classeCor[index].classList.add(coresPaleta[index]);
    }
  }
  adicionarCorPaleta(cor);
};
