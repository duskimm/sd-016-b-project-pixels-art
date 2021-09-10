window.onload = function() {

  //faz com que a cor black seja selecionada
  selectColor();
  function selectColor () {
      let colorSelect = document.querySelector('.color');
      colorSelect.classList.add('selected');
      firstload = false;
  }

  //chama cada cor para uma let
  let color0 = document.getElementsByClassName('color')[0];
  let color1 = document.getElementsByClassName('color')[1];
  let color2 = document.getElementsByClassName('color')[2];
  let color3 = document.getElementsByClassName('color')[3];

  //adiciona evento nas cores, caso clicke chama uma função que marca ela e desmarca as outras cores

  //black
  color0.addEventListener('click', callColor0);
  function callColor0() {
    color0.classList.add('selected');
    color1.classList.remove('selected');
    color2.classList.remove('selected');
    color3.classList.remove('selected');
  }
  //red
  color1.addEventListener('click', callColor1);
  function callColor1() {
    color0.classList.remove('selected');
    color1.classList.add('selected');
    color2.classList.remove('selected');
    color3.classList.remove('selected');
  }
  //blue
  color2.addEventListener('click', callColor2);
  function callColor2() {
    color0.classList.remove('selected');
    color1.classList.remove('selected');
    color2.classList.add('selected');
    color3.classList.remove('selected');
  }
  //green
  color3.addEventListener('click', callColor3);
  function callColor3() {
    color0.classList.remove('selected');
    color1.classList.remove('selected');
    color2.classList.remove('selected');
    color3.classList.add('selected');
  }
}