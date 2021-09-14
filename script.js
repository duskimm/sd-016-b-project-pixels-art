let colors = {
    active: null,
    previous: ['black', 'red', 'green', 'blue', 'yellow', 'cyan', 'pink', 'none']
}
let board = {
    size: 5,
    content: []
}

const message = document.createElement('p');

/* Paleta de coress */
function generatePalette() {
    const element = document.querySelector('#color-palette');
    /* Ultimas cores selecionadas */
    for (let item of colors.previous) {
        const div = document.createElement('div');
        div.classList.add('color');
        div.style.background = item;
        element.appendChild(div);
    }

    /* Seletor das cores */
    // const form = document.createElement('form');
    // const input = document.createElement('input');

    // input.classList.add('color', 'colorpick');
    // input.setAttribute('type', 'color');

    // message.innerHTML = "Seletor de Cores";

    // element.appendChild(form);
    // form.appendChild(message);
    // form.appendChild(input);
}

function generatePixelGrid() {
    let columns = [], rows = [];
    
    const element = document.querySelector('#pixel-board');
    const div = document.createElement('div');
    div.style.background = 'white';
    div.classList.add('pixel');

    for (let i = 0; i < board.size; i++) {
        let per = '1fr';
        columns.push(per);
    }

    element.style.gridTemplateColumns = columns.join(' ');
    element.style.gridTemplateRows = columns.join(' ');

    for (let k = 0; k < board.size; k++) {
        for (let v = 0; v < board.size; v++) {
            const div = document.createElement('div');
            div.style.background = 'white';
            div.classList.add('pixel');
            element.appendChild(div);
        }
    }
}
/*
* Atualiza as cores dos elementos;
*/
function updateElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.background = colors.previous[i];
    }
}

/*
* Atualiza as cores do objeto colors.
*/
function updateColorPrevious(active) {

    for (let i in colors.previous) {
        if ((colors.previous.length - 1) === Number(i))
            continue;
        colors.previous[i] = colors.previous[Number(i) + 1];
    }
    colors.previous[colors.previous.length - 1] = active;
}

function updatePalette() {
    // let input = document.querySelector('.colorpick');
    let elements = document.querySelectorAll('.color:not(.colorpick)');
    let prev = elements[elements.length - 1].style.background,
        active;
    // input.addEventListener('change', event => {
    //     active = input.value;
    //     // Atualiza as cores do objeto colors;
    //     updateColorPrevious(active);
    //     // Atualiza as cores da paleta
    //     updateElements(elements);
    //     // Seleciona a cor
    //     colors.active = active;
    // });

    elements.forEach(element => {
        element.addEventListener('click', event => {
            active = element.style.background;
            // Atualiza as cores do objeto colors;
            //updateColorPrevious(active);
            // Atualiza as cores da paleta
            updateElements(elements);
            // Seleciona a cor
            colors.active = active;
        });
    });
}

window.onload = function() {
    // Inicializade uma paleta de cores com valores padrões
    generatePalette();
    // Atualizaz a paleta de cores;
    updatePalette();
    // Gera o Pixel Grid;
    generatePixelGrid();

    document.querySelectorAll('.pixel').forEach(element => {
        element.addEventListener('click', event =>  {
            element.style.background = colors.active;
        });
    });
}