

function selectColor(colorSelect) {
    let colorSelect = document.getElementsByClassName('selected');
if (colorSelect.className === 'selected') {
    colorSelect.classList.remove('selected');
} 

if (colorSelect.className !== 'selected') {
    colorSelect.classList.add('selected');
}
}


colorSelect.addEventListener('click', selectColor);