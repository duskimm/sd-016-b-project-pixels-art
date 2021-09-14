window.onload = function beginning (){
  document.getElementsByClassName("color")[0].classList.add("selected");
  
	let colorList = document.getElementsByClassName("color");
	for (let i=0; i < colorList.length; i++) {
	  colorList[i].addEventListener("click", changeColorSelected);
	}
  function changeColorSelected(event){
		const lastColor = document.querySelector(".selected");
		lastColor.classList.remove("selected");
		event.target.classList.add("selected");	
	}
	
	
	

}