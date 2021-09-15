window.onload = function beginning() {
  document.getElementsByClassName('color')[0].classList.add('selected');
  
	//criando funcão que seleciona as cores da paleta
	let colorList = document.getElementsByClassName('color');
	for (let i = 0; i < colorList.length; i++) {
	  colorList[i].addEventListener('click', changeColorSelected);
	}
  function changeColorSelected(event) {
		const lastColor = document.querySelector('.selected');
		lastColor.classList.remove('selected');
		event.target.classList.add('selected');	
  }

	//criando quadro de pixels 5x5
  let linesBoard = document.getElementsByClassName('pixel-row');
	for (let i = 0; i < linesBoard.length; i ++) {
		for (let index = 0; index < 5; index ++) {
			createPixelColumn(linesBoard[i]);
		}
	}

	function createPixelColumn (parent) {
		let column = document.createElement('div');
		column.classList.add("pixel");
		parent.appendChild(column);
	}


	//criando função que colore os pixels
	let pixelsList = document.getElementsByClassName('pixel-row');
	for (let i = 0; i < pixelsList.length; i++) {
	  pixelsList[i].addEventListener('click', changeColor);
	}

	function changeColor(event) {
		let currentSelected = document.querySelector('.selected');
		let color = window.getComputedStyle(currentSelected, null).getPropertyValue("background-color");
		event.target.style.backgroundColor = color ; 
	}
  
	//criando função que limpa os pixels
	document.querySelector('#clear-board').addEventListener('click',cleanAll);

	function cleanAll(event) {
		for(let i = 0; i < pixelsList.length; i++) {
			pixelsList[i].style.backgroundColor = 'white';
		}
	}

  // criando função para escolher o tamanho do quadro de pixels
	let tamanhoEscolhido = parseInt(document.getElementById('board-size').value);
	
	document.querySelector('#vqv').addEventListener('click',defineTheSize);
  

}
