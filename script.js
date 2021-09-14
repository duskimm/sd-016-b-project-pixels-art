window.onload = function beginning (){
  document.getElementsByClassName("color")[0].classList.add("selected");
  
	let colorList = document.getElementsByClassName("color");
	for(i=0; i < colorList.length; i++) {
	  //document.getElementsByClassName("color")[i].addEventListener("click", changeColorSelected);
		colorList[i].addEventListener("click", changeColorSelected);
	}
  function changeColorSelected(event){
		const lastColor = document.querySelector(".selected");
		lastColor.classList.remove("selected");
		event.target.classList.add("selected");	
	}
	
	
	

}