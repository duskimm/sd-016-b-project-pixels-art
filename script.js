window.onload = function (params) {
    let paletaN = 4;
    let linhas = 5;
    let unica = [];

    // configura a paleta de cores
    for (let i = 0; i < paletaN; i += 1){
        let div = document.createElement('div');
        let cor = cor_aleatoria_lista();
        while(cor == 'white' || cor == 'black' ||
            unica.includes(cor)){
            cor = cor_aleatoria_lista();
        }
        unica.push(cor);
        div.style.backgroundColor = cor;
        div.classList.add('color');
        
        //se for o primeiro é preto e classe += 'selected'
        if (i == 0) {
            div.classList.add('selected');
            div.style.backgroundColor = 'black';
        }
        document.querySelector('#color-palette').appendChild(div);
    }

    // configura o quadro
    for (let j = 0; j < linhas; j += 1){
        let linha = document.createElement('div');
        linha.classList.add('linha');
        for (let i = 0; i < linhas; i += 1) {
            let div = document.createElement('div');
            div.style.backgroundColor = 'white';//cor_aleatoria_lista();
            div.classList.add('pixel');
            linha.appendChild(div);
        }
        document.querySelector('#pixel-board').appendChild(linha);
    }

    // habilita pintar
    document.querySelector(
        '#pixel-board').addEventListener('click', function(e){
        if (e.target.classList.contains('pixel')) {
            e.target.style.backgroundColor = cor_selecionada()
        }
    })

    function cor_selecionada(){
        return document.querySelector(
            '.selected').style.backgroundColor;
    }

    // habilita selecionar cor
    document.querySelector('#color-palette'
        ).addEventListener('click', function(e){
        if(e.target.classList.contains('color')) {
            document.querySelector('.selected').classList.remove('selected');
            e.target.classList.add('selected')
        }
    })

    // habilita limpar o quadro
    document.querySelector('#clear-board').addEventListener(
        'click', function (e) {
        for (i of document.getElementsByClassName('pixel')) {
            i.style.backgroundColor = 'white';
        }
    })
    
}

function cor_aleatoria_lista(lista) {

    //http://www.html-color-names.com/color-groups.php

    //http://www.html-color-names.com/basic-color-names.php
    var cores = lista || [ 	"black","silver","gray","white",
                            "marrom","red","purple","fuchsia",
                            "green","lime","olive","yellow",
                            "navy","blue","teal","cyan"];
    return cores[Math.floor( Math.random() * 100 ) % cores.length];
}

function cor_aleatoria_rgb(r,g,b) {

    //ex(1,1,0)//tons de azul sorteia a componente 0 ou não definida
    var ra = r || Math.random() * 255,
        ga = g || Math.random() * 255,
        ba = b || Math.random() * 255;
    return "rgb("+ ra + "," + ga + "," + ba + ")";
}

// não esqueça a linha em branco no final do arquivo
