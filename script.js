let size = 5;

//cria a pixel-board de acordo com o size indicado
bordCreator(size);
function bordCreator (hei) {
  let width = hei;
  let heigth = hei;
  for(let index = 0; index < heigth; index += 1) {
    for(let index = 0; index < width; index += 1) {
      let div = document.createElement("div");
      document.querySelector('#pixel-board').appendChild(div);
      // document.querySelector('#pixel-board').lastChild.classList.add('pixel')
      if(index == 0) {
        document.querySelector('#pixel-board').lastChild.classList.add('pixel')
        // document.querySelector('#pixel-board').lastChild.classList.add('pixel1')
      }else {
        document.querySelector('#pixel-board').lastChild.classList.add('pixel')
      }
    }
    let br = document.createElement("br");
    document.querySelector('#pixel-board').appendChild(br);
  }
}

window.onload = function() {
  let printColor = 'black';

  //faz com que a cor black seja selecionada
  setColor();
  function setColor () {
      let colorSelect = document.querySelector('.color');
      colorSelect.classList.add('selected');
  }
  //chama cada cor para uma let, adiciona evento nas cores, caso clicke chama uma função que marca ela e desmarca as outras cores
  let color = [];
  for(let index = 0; index < document.getElementsByClassName('color').length; index += 1) {
    color.push(document.getElementsByClassName('color')[index]);
    color[index].addEventListener('click', selectColor);
  }
  //funcao que seleciona e desmarca as outras cores da palheta
  function selectColor(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    printColor = event.target.classList[1];
    // event.target.querySelector('.selected').style.backgroundColor = event.target.classList[1];
  }
  //chama cada pixel para uma let e add funcao de botao
  let pixel = [];
  for(let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
    pixel.push(document.getElementsByClassName('pixel')[index]);
    pixel[index].addEventListener('click', print);
  }
  //pinta o quadrado clickado
  function print (event) {
    event.target.style.backgroundColor = printColor;
  }
  //limpa o quadro de pixel
  let buttonClean = document.querySelector('#clear-board');
  buttonClean.addEventListener('click', clearBoard);
  function clearBoard () {
    for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  }
}