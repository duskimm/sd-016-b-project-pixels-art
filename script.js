window.onload = function () {
  function selectColor() {
    let colorSelect = document.getElementsByClassName('color');
    console.log(colorSelect);
    colorSelect[0].addEventListener('click', corSelecionada);
    function corSelecionada(event) {
     event = this.style.backgroundColor = 'blak';
    }
 }
  selectColor();
}
