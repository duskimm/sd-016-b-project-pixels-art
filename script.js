const colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', addClassName);
	function addClassName (event) {
		let selected = event.target;
		for (let i = 0; i < colors.length; i += 1) {
			colors[i].classList.remove("selected");
		}
		selected.classList.add("selected");
	}}
