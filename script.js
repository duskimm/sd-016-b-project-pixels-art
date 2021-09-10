let paletaDeCores = document.querySelectorAll('.color');
let colors = ['black','red','blue','green'];
let cont = 0;

for(let i of paletaDeCores){
	adicionarCores(i);
}

function adicionarCores(localCor) {
	localCor.style.backgroundColor = colors[cont];
	cont += 1;
}

