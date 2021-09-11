var pixelFrame = document.querySelector('#pixel-board');
function pixelCreator(tamanho){
    for (let i = 0; i < tamanho; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelFrame.appendChild(pixel)
        pixel.style.backgroundColor = 'white'
        
    }
}
pixelCreator('25');



let color = document.getElementsByClassName('color');
let paleta = document.getElementById('color-palette');

paleta.addEventListener('click', function (event) {
    for (let i = 0; i < color.length; i += 1) {
        color[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
})


    let pixels = document.getElementsByClassName('pixel');
    
    
    function changeColor(event){
        let selectedColor = document.querySelector('.selected')
        let eventTarget = event.target;
        let bgColor = window
        let corPixel = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color')
        eventTarget.style.backgroundColor = corPixel;
        
}
pixelFrame.addEventListener('click', changeColor)

let botao = document.getElementById('clear-board');
let pixel = document.getElementsByClassName('pixel');

botao.addEventListener('click', function(){
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white'
        console.log(pixel[i]);
    }
})