function povoaBoard() {
    let board = document.getElementById('pixel-board')
    for(let i = 1; i <= 25; i++){
        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        board.appendChild(pixel)        
    }
}
//Requisito 07
function setColorSelectEvent() {
    let paleta = document.getElementById('color-palette')
    let corLista = document.getElementsByClassName('color')
    paleta.addEventListener('click',function(event) {
        let id = event.target.id
        let div = document.getElementById(id)
        for(let i = 0; i < corLista.length; i++){
            if (corLista[i].id === id) {
                corLista[i].className = 'color selected'
                let cor = window.getComputedStyle(div, null).getPropertyValue('background-color')
                saveSelectedColorInSession(cor)
            } else {
                corLista[i].className = 'color'
            }
        }
    })
}
function saveSelectedColorInSession(cor) {
    if(sessionStorage.getItem('colorSelected') === null){
        sessionStorage.setItem('colorSelected', JSON.stringify([]))
    }
    sessionStorage.setItem('colorSelected', JSON.stringify(cor))
}
//Requisito 08
function setColorPaintEvent() {
   document.querySelectorAll('.pixel').forEach(pixel => {
       pixel.addEventListener('click', event => {
           console.log(pixel);
           let pixelCor = window.getComputedStyle(event.target, null).getPropertyValue('background-color')
           let corSelecionada = JSON.parse(sessionStorage.getItem('colorSelected'))
           if(pixelCor !== corSelecionada){
               event.target.style.backgroundColor = corSelecionada
           }           
       })
   })
}
//Requisito 09

function setClearButtonEvent() {
    let btn = document.getElementById('clear-board')
    btn.addEventListener('click', function(event) {
        let pixelLista = document.getElementsByClassName('pixel')
        for (let i = 0; i < pixelLista.length; i++) {
            pixelLista[i].style.backgroundColor = 'rgb(255, 255, 255'            
        }
    })
}



window.onload = function() {
    povoaBoard()
    saveSelectedColorInSession('rgb(0,0,0)')
    setColorSelectEvent()
    setColorPaintEvent()
    setClearButtonEvent()
}