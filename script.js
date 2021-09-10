// Variáveis Globais
const paletteBox = ['black', '#8871FE', '#D0CD94', '#FF331F'];
const sectionPalette = document.getElementById('color-palette');
// Função que cria os quadrados
function creatColorPalette() {
  for (let index = 0; index < paletteBox.length; index += 1) {
    const liPalette = document.createElement('div');
    liPalette.style.background = paletteBox[index];
    liPalette.className = 'color';
    sectionPalette.appendChild(liPalette);
  }
}
creatColorPalette();
