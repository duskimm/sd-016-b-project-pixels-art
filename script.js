function resetSelected() {
  const paletteChilds = document.querySelector('#color-palette').children;
  // eslint-disable-next-line no-restricted-syntax
  for (const color of paletteChilds) {
    color.classList.remove('selected');
    color.style.border = '';
    color.style.borderRadius = '';
  }
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    const element = event.target;

    resetSelected();

    element.classList.add('selected');

    element.style.border = '5px solid grey';
    element.style.borderRadius = '50%';
  }
});
