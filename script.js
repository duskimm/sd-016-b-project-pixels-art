window.onload = function() {
  selectColor();
  function selectColor () {
      let colorSelect = document.querySelector('.color');
      colorSelect.classList.add('selected');
      firstload = false;
  }
}