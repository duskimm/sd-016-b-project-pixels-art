const selecionado = document.querySelectorAll(".selected");
const cor = document.querySelectorAll(".color");
const paleta = document.getElementById("color-palette");



// function que faz a classe `.selected` ser alterada dentro da id `color-palette`;
// 1 Eu quero mudar a classe selected
// 2 dentro da classe color

function corSelecionada (event){
    for (let index = 0; index < cor.length; index+= 1) {
        cor[index].classList.remove('selected');
    }
    event.target.classList.add('selected')
}
paleta.addEventListener('click',corSelecionada)








// function criaQuadrados (){
//     const quadradoBranco = document.getElementsByClassName('quadrado-branco');
//     for (let index = 0; index < 5; index+= 1) {
//     let linha = document.createElement('div');
//         quadradoBranco.ap
        
//     }
// }