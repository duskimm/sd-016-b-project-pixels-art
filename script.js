
window.onload = function() {
    let firstSelect = document.querySelector('.color');
    firstSelect.classList.add("selected");
    colors =['black', 'red', 'orange', 'blue']


// function createPalette (qtd) {
//     for(let i= 0; i < qtd; i += 1) {
//     const pixelBoard = document.querySelector('#pixel-board');
//     const pixels = document.createElement('div');  
//     pixels.className = 'pixel' 
//     pixelBoard.appendChild(pixels);
//     console.log(pixels);
//     }
// }


function createListenersPalette(){
    for (let i=0; i<colors.length; i+=1) {
        document.querySelector('.color.'+ colors[i]).addEventListener("click", select);
    }
} createListenersPalette();


 // https://medium.com/@erycdasilva/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f
function select() {
    const listPalette = document.querySelectorAll('.color')
    for (let i=0; i<listPalette.length; i+=1) {
        if(event.target == listPalette[i]) {
            listPalette[i].classList.add('selected')
        } else {
            listPalette[i].classList.remove('selected')
        }  
    }
}

function paintPixel (){
    event.target.style.backgroundColor = document.getElementsByClassName('selected')[0].className.split(' ')[1]; 
}

function createPixels (qtd) {
    for(let i= 0; i < qtd; i += 1) {
    let pixelBoard = document.querySelector('#pixel-board');
    let pixels = document.createElement('div');  
    pixels.className = 'pixel' 
    pixels.backgroundColor = 'white';
    pixelBoard.appendChild(pixels);
    pixels.addEventListener("click", paintPixel);

    }
}
createPixels(25);



function getClean (){
    let pixels = document.querySelectorAll('.pixel')
    for (let i=0; i<pixels.length; i+=1) {
        pixels[i].style.backgroundColor = 'white';
    }
}

document.querySelector('#clear-board').addEventListener("click", getClean);
document.getElementById('generate-board').addEventListener("click", createNewBoard);


function createNewBoard() {
    let board = document.getElementById('pixel-board');
    let pixels = document.querySelectorAll('.pixel');
    let size = document.getElementById('board-size').value;

    if (size == '') {
        alert('Board inválido!')
    } else if (size < 5) {
        board.style.width = 5*44 + 'px';
        board.style.height = 5*44 + 'px';

        for (let i=0; i < pixels.length; i += 1) {
            pixels[i].remove();
        }
    createPixels(5*5); 

    } else if (size > 50) {
        board.style.width = 50*44 + 'px';
        board.style.height = 50*44 + 'px';

        for (let i=0; i < pixels.length; i += 1) {
            pixels[i].remove();
        }
    createPixels(50*50); 

    } else if (size > 0) {
        board.style.width = size*44 + 'px';
        board.style.height = size*44 + 'px';

        for (let i=0; i < pixels.length; i += 1) {
            pixels[i].remove();
    }
    createPixels(size*size); 
}
}
}

