const cor1 = document.querySelector('.black');
const cor2 = document.querySelector('.lightblue');
const cor3 = document.querySelector('.red');
const cor4 = document.querySelector('.pink');

function selecionaCor(e) {
    e.stopPropagation();
   const corSel = document.querySelectorAll('.color');
   for (let i = 0; i < corSel.length; i+=1) {
     if (corSel[i].classList.contains('selected')) {
       corSel[i].classList.remove('selected')
     } 
   } e.target.classList.add('selected');
 }
 document.querySelector('#color-palette').addEventListener('click', selecionaCor);

 