window.onload = function() {
  

  function selectedColor() {
      let pixelCor1 = document.getElementById('cor1')
      let pixelCor2 = document.getElementById('cor2')
      let pixelCor3 = document.getElementById('cor3')
      let pixelCor4 = document.getElementById('cor4')
      let selectedColor = document.getElementsByClassName('selectedColor')

      pixelCor1.addEventListener('click', function() {
          if(selectedColor.length === 0) {
            pixelCor1.className = 'color selectedColor'  
          }else{
            pixelCor1.className = 'color'
          }
      })
           
      pixelCor2.addEventListener('click', function() {
          if(selectedColor.length === 0) {
            pixelCor2.className = 'color selectedColor'  
          }else{
            pixelCor2.className = 'color'
          }
      })

      pixelCor3.addEventListener('click', function() {
          if(selectedColor.length === 0) {
            pixelCor3.className = 'color selectedColor'  
          }else{
            pixelCor3.className = 'color'
          }
      })

      pixelCor4.addEventListener('click', function() {
          if(selectedColor.length === 0) {
            pixelCor4.className = 'color selectedColor'  
          }else{
            pixelCor4.className = 'color'
          }
      })

  }

  selectedColor()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
 function pintaPixel() {
  let pixel = document.getElementsByClassName('pixel')
  let selectedColor = document.getElementsByClassName('selectedColor')
  for(let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', function(){
      pixel[i].style.backgroundColor = selectedColor[0].style.backgroundColor.toString()
    })
  }
 }

 pintaPixel();
 


}