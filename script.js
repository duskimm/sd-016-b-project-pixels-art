window.onload = function beginning() {
  document.getElementsByClassName('color')[0].classList.add('selected');
  
	
	let colorList = document.getElementsByClassName('color');
	for (let i = 0; i < colorList.length; i++) {
	  colorList[i].addEventListener('click', changeColorSelected);
	}
  function changeColorSelected(event) {
		const lastColor = document.querySelector('.selected');
		lastColor.classList.remove('selected');
		event.target.classList.add('selected');	
  }

	let pixelsList = document.getElementsByClassName('pixel');
	for (let i = 0; i < pixelsList.length; i++) {
	  pixelsList[i].addEventListener('click', changeColor);
	}

	function changeColor(event) {
		let currentSelected = document.querySelector('.selected');
		let color = window.getComputedStyle(currentSelected, null).getPropertyValue("background-color");
		event.target.style.backgroundColor = color ;
	}

 
}
