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

 
window.onload = function setSelected() {
    let color = document.getElementsByClassName('color');
    color[0].classList.add('selected');
    for (let i = 1; i < color.length; i += 1) {
        if(color[i].classList == 'selected'){
            color[i].classList.remove('selected')
            color[0].classList.add('selected')
        }
        
    }
}


let color = document.getElementsByClassName('color');
let paleta = document.getElementById('color-palette');

paleta.addEventListener('click', function HellouClick(event) {
    for (let i = 0; i < color.length; i += 1) {
        color[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
})

