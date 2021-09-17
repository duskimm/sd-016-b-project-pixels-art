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
        let cor = document.getElementById(id)
        for(let i = 0; i < corLista.length; i++){
            if (corLista[i].id === id) {
                corLista[i].className = 'color selected'
            } else {
                corLista[i].className = 'color'
            }
        }
    })
}



window.onload = function() {
    povoaBoard()
    setColorSelectEvent()
}