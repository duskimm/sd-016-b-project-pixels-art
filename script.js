function addBlack (){
  let element1 = document.querySelector('.cblack');
  element1.style.backgroundColor = 'black';
}
addBlack();
function addRed (){
  let element1 = document.querySelector('.cred');
  element1.style.backgroundColor = 'red';
}
addRed();
function addBlue (){
  let element1 = document.querySelector('.cblue');
  element1.style.backgroundColor = 'blue';
}
addBlue();
function addGreen (){
  let element1 = document.querySelector('.cgreen');
  element1.style.backgroundColor = 'green';
}
addGreen();
function addWhite (){
  let element1 = document.querySelector('.pixel');
  element1.style.backgroundColor = 'white';
}
addWhite();

window.onload = function () {
  let getBlack = document.querySelector('.cblack');
  let getBlue = document.querySelector('.cblue');
  let getRed = document.querySelector('.cred');
  let getGreen = document.querySelector('.cgreen');

  function getColorBlack() {// está iniciando com o black selected
    getBlack.classList.add('selected');
  }
  getColorBlack();

  let getPalletColors = document.querySelector('#color-palette');
  
  function verifySelected (n){
    let answer = false;
    for (let i = 0; i < n.length; i += 1){
      if (n[i] === 'selected'){
        answer = true;
      }
    }
    return answer;
  }
  // Selecionar cores
  getBlue.addEventListener('click', function (){
    let getSelect = document.querySelector('.selected');
    getSelect.classList.remove('selected');      getBlue.classList.add('selected');
  })
  getBlack.addEventListener('click', function (){
    let getSelect = document.querySelector('.selected');
    getSelect.classList.remove('selected');
      getBlack.classList.add('selected');
  })
  getRed.addEventListener('click', function (){
    let getSelect = document.querySelector('.selected');
    getSelect.classList.remove('selected');
      getRed.classList.add('selected');
  })
  getGreen.addEventListener('click', function (){
      let getSelect = document.querySelector('.selected');
      getSelect.classList.remove('selected');
      getGreen.classList.add('selected');
  })
// pintar os quadrados ( pesquisei olhando o  exercicio 10 do dia de javascript eventos 5-3 para fazer colorir os pixels, visto que era parecido o modo de fazer)
let getDivFather = document.querySelector('#pixel-board');

getDivFather.addEventListener('click', function (event){
  let pegaSelected = document.querySelector('.selected');
  let colorEvent = event.target.backgroundColor;
  let colorSelected = pegaSelected.style.backgroundColor;
  if (event.target.id !== 'linePixels'){// primeiro if não deixa ele pintar as div linhas
    if (colorEvent != colorSelected){
      event.target.style.backgroundColor = colorSelected;
    } 
  }
})

// Botão
let getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', function (){
  let getPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < getPixel.length; i += 1){
    getPixel[i].style.backgroundColor = 'white';
  }
})

}