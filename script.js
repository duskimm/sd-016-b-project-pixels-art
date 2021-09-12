let chamaDivPai = document.getElementById('color-palette');

function colorPalette(cor){
    chamaDivPai;
   let primeiroFilhoDaPaletaRosa = document.createElement('div');
    primeiroFilhoDaPaletaRosa.className = 'color';
    primeiroFilhoDaPaletaRosa.style.backgroundColor =cor;
    chamaDivPai.appendChild(primeiroFilhoDaPaletaRosa);
}
colorPalette('black');
colorPalette('pink');
colorPalette('purple');
colorPalette('green');

// function colorPalette2(){
//     chamaDivPai;
//     let segundoFilhoDaPaletaVerde = document.createElement('div');
//     segundoFilhoDaPaletaVerde.className = 'color';
//     segundoFilhoDaPaletaVerde.style.backgroundColor ='green';
//     chamaDivPai.appendChild(segundoFilhoDaPaletaVerde);
// }
// colorPalette2();

// function colorPalette3(){
//     chamaDivPai;
//    let terceiroFilhoDaPaletaPreto = document.createElement('div');
//      terceiroFilhoDaPaletaPreto.className = 'color';
//      terceiroFilhoDaPaletaPreto.style.backgroundColor ='gray';
//    chamaDivPai.appendChild(terceiroFilhoDaPaletaPreto);
//    }
//    colorPalette3();