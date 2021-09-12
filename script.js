const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const boardButton = document.getElementById('generate-board');
const generateBoard = document.getElementById('generate-board');


function addClassName () {
	for (let index = 0; index < colors.length; index += 1) {
		colors[index].addEventListener('click', add);
		function add (event) {
			let selected = event.target;
			for (let i = 0; i < colors.length; i += 1) {
				colors[i].classList.remove("selected");
			}
			selected.classList.add("selected");
	}}
}
addClassName();

function paintingPixels () {
	pixelBoard.addEventListener('click', function (e) {
		if (e.target && e.target.className == "pixel") {
			let checkClass = document.querySelector('.selected');
			e.target.style.backgroundColor = checkClass.classList[0];
		}
	})
}
paintingPixels();
// Aprendi a usar o event delegation nesse site: https://davidwalsh.name/event-delegate para identificar o elemento que foi clicado dentro do elemento pai.

function cleaningFrame () {
	let pixels2 = document.getElementsByClassName('pixel');
	for (let index = 0; index < pixels2.length; index += 1) {
		pixels2[index].style.backgroundColor = 'white';
	}
}

button.addEventListener('click', cleaningFrame);

function generateBoardSize (value) {
	pixelBoard.innerHTML = '';
	for (let index = 1; index <= (value * value); index += 1) {
		let pixelElements = document.createElement('div');
		pixelElements.className = 'pixel';
		pixelBoard.appendChild(pixelElements);
	}
	pixelBoard.style.width = (value * 42) + 'px';
}

function checkInvalidBoard(input){
	if (input == '') {
		window.alert('Board inválido!');
	}
}

function addPixels () {
	let inputValue = document.getElementById('board-size').value;
	checkInvalidBoard(inputValue);
	if (inputValue < 5) {
		inputValue = 5;
	} else if (inputValue > 50) {
		inputValue = 50;
	}
	generateBoardSize (inputValue)
};

generateBoard.addEventListener('click', addPixels);
window.onload = generateBoardSize (5);
