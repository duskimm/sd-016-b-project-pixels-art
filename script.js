window.onload = function(){

  let colorOne = document.querySelector('#palettOne');
  let colorTwo = document.querySelector('#palettTwo');
  let colorThree = document.querySelector('#palettThree');
  let colorFour = document.querySelector('#palettFour'); 

  colorOne.addEventListener('click',function(){
    if(colorOne.className !== "selected"){
      colorOne.classList.add('selected')
      colorTwo.classList.remove('selected')
      colorThree.classList.remove('selected')
      colorFour.classList.remove('selected')
    }
  })

  colorTwo.addEventListener('click',function(){
    if(colorTwo.className !== "selected"){
      colorTwo.classList.add('selected')
      colorOne.classList.remove('selected')
      colorThree.classList.remove('selected')
      colorFour.classList.remove('selected')
    }
  })

  colorThree.addEventListener('click',function(){
    if(colorThree.className !== "selected"){
      colorThree.classList.add('selected')
      colorTwo.classList.remove('selected')
      colorOne.classList.remove('selected')
      colorFour.classList.remove('selected')
    }
  })

  colorFour.addEventListener('click',function(){
    if(colorFour.className !== "selected"){
      colorFour.classList.add('selected')
      colorTwo.classList.remove('selected')
      colorThree.classList.remove('selected')
      colorOne.classList.remove('selected')
    }
  })

}