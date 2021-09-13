let colorsDiv = document.querySelector("#color-palette");
let colorsChildren = colorsDiv.children;
let pixelsDiv = document.querySelector("#pixel-board");
let pixelsChildren = pixelsDiv.children; 

function createColors () {  
  let numberOfColors = 4;
  let colors = ['black', 'red', 'blue', 'green']
  let div;
  for (index = 0; index < numberOfColors; index += 1) {
    div = document.createElement("div");    
    div.classList.add('color')                   
    colorsDiv.appendChild(div);
    colorsDiv.children[index].style.backgroundColor = (colors[index]);
  }  
  colorsChildren[0].classList.add('selected');
} 
function createPixel () {   
  let pixelNumber = 5;
  let div;
  let count = 0;
  for (index1 = 0; index1 < pixelNumber; index1 += 1) {
    div = document.createElement("div");    
    div.classList.add('pixels-lines')                   
    pixelsDiv.appendChild(div);
    for (index = 0; index < pixelNumber; index += 1) {
      div = document.createElement("div");    
      div.classList.add('pixel')                     
      pixelsChildren[index1].appendChild(div);       
      let pix = document.querySelectorAll(".pixel");
      pix[count].style.backgroundColor ='white';
      count += 1;
    }
  }
}
function listenerColor () {  
  for (index = 0; index < colorsChildren.length; index += 1) {    
    colorsChildren[index].addEventListener('click', selectColor);
  }  
}
function selectColor(listenerColor) {
 console.log(listenerColor.target.style.backgroundColor);     
  return    
}

// function listenerPixel () {   
//   let pix = document.querySelectorAll(".pixel"); 
//   for (index = 0; index < pix.length; index += 1) {        
//     pix[index].addEventListener('click', function () {
//       if (selectColor != pix[0].style.backgroundColor) {        
//         console.log(pix[0].style.backgroundColor); 
//         // console.log(selectColor(listenerColor));
//         // pix[0].style.backgroundColor = selectColor;
//       }
//     });        
//   }
// }

window.onload = function start () {
  createColors ();
  createPixel ();
  listenerColor ();
  // listenerPixel ();
}
