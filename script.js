//Função gerando cores hexadecimais
function gerar_cor_hexadecimal() {
  return '#' + parseInt((Math.random() * 0xFFF))
    .toString(16)
    .padStart(3, '0');
}
//Criar Bloco de Cores
function criarBlocoDeCores(blocos) {
  for (let ind = 0; ind < blocos; ind += 1) {
    const newDiv = document.getElementById('color-palette');
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color');
    colorBlock.setAttribute('id', `color${ind+1}`)
    newDiv.appendChild(colorBlock);
  }
}
criarBlocoDeCores(4);
//Montando Paleta de cores
function criarPaleta() {
  let cores = ['#000'];
  for (let ind = 0; ind < cores.length; ind += 1) {
    while (cores.length < 4) {
      let newColor = gerar_cor_hexadecimal();
      if (newColor != 0xFFF && newColor != cores[ind]) {
        cores.push(newColor);
      }
    }
  }
  return cores;
}
//Adiconar core aos blocos da paleta de cores
function addCores(){
    const cores = criarPaleta();
    const element = document.querySelector('#color-palette');
    for(let ind = 0; ind < element.children.length; ind += 1){
        const boxColor = document.getElementById(`color${ind+1}`);
        console.log (boxColor);
        boxColor.style.backgroundColor = cores[ind];
    }
}
addCores();
