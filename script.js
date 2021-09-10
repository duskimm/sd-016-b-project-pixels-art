window.onload = function () {
  let getBlack = document.querySelector('.cblack');
  let getBlue = document.querySelector('.cblue');
  let getRed = document.querySelector('.cred');
  let getGreen = document.querySelector('.cgreen');

  function getColorBlack() {
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


}