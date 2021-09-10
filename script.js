console.log('vamo q vamo');
const colorPaintBlack = document.getElementById('blackColor');
const colorPaintRed = document.getElementById('redColor');

function selectedVerfifier() {
  const selected = document.querySelectorAll('.color');
  for (let index = 0; index<selected.length; index += 1) {
    selected[index].classList.add('selected');
    selected[index].classList.remove('selected');
  }
}
selectedVerfifier();