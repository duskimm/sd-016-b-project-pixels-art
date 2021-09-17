const pixelLinha = document.getElementsByClassName('pixel-linha');
const pixelBox = document.getElementById('pixel-board');

function pixelBlock() {
  for (let index = 1; index <= 5; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'pixel-linha';
    for (let i = 1; i <= 5; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';

      linha.appendChild(pixel);
    }
    pixelBox.appendChild(linha);
  }
}
pixelBlock();
