function povoaBoard() {
    let board = document.getElementById('pixel-board')
    for(let i = 1; i <= 25; i++){
        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        board.appendChild(pixel)
    }
}



window.onload = function() {
    povoaBoard()
}