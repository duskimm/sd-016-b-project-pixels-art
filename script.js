
window.onload = function() {
    let firstSelect = document.getElementsByClassName('color')[0];
    firstSelect.classList.add("selected");
    colors =['black'];

    //https://css-tricks.com/snippets/javascript/random-hex-color/  - > Random Color


function createPalette () {

    for(let i=0; i<3; i += 1) {
    let palette = document.querySelector('#color-palette')
    let color = document.createElement('div')
    var randomColor = Math.floor(Math.random()*16777).toString(16);
    color.classList.add('color')
    color.classList.add('a' + randomColor)
    colors.push(randomColor);
    color.style.backgroundColor = '#' + randomColor;
    palette.appendChild(color)
}
} createPalette();



function createListenersPalette(){
    for (let i=0; i<colors.length; i+=1) {
        if (i== 0 ) {
        document.querySelector('.color.'+ colors[i]).addEventListener("click", select);
        } else {
        document.querySelector('.color.a'+ colors[i]).addEventListener("click", select);
        }
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
    let color = document.getElementsByClassName('selected')[0].className.split(' ');
    if(color[1] == 'black') {
    event.target.style.backgroundColor = color[1];
    } else {
    event.target.style.backgroundColor = '#' + document.getElementsByClassName('selected')[0].className.split(' ')[1].substring(1); 
}
    console.log(document.getElementsByClassName('selected')[0].className.split(' ')[1]);
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

