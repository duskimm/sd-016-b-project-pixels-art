const selecionado = document.querySelectorAll(".selected");
const cor = document.querySelectorAll(".color");
const paleta = document.getElementById("color-palette");



// function que faz a classe `.selected` ser alterada dentro da id `color-palette`;
function corSelecionada (){
    cor.className = "selected";
    paleta.addEventListener('click',selecionado)
}









// function criaQuadrados (){
//     const quadradoBranco = document.getElementsByClassName('quadrado-branco');
//     for (let index = 0; index < 5; index+= 1) {
//     let linha = document.createElement('div');
//         quadradoBranco.ap
        
//     }
// }