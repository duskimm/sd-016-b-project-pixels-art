function resetSelected() {
  const paletteChilds = document.querySelector('#color-palette').children;
  // eslint-disable-next-line no-restricted-syntax
  for (const color of paletteChilds) {
    color.classList.remove('selected');
    color.style.border = '';
    color.style.borderRadius = '';
  }
}

let colorSelected = 'black';
const blackColor = document.querySelector('#black');
blackColor.style.border = '5px solid grey';
blackColor.style.borderRadius = '50%';

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    const element = event.target;

    resetSelected();

    colorSelected = element.id;
    element.classList.add('selected');

    element.style.border = '5px solid grey';
    element.style.borderRadius = '50%';
  }
});

document.querySelectorAll('.pixel').forEach((pixel) => {
  pixel.addEventListener('click', (event) => {
    const pixelClicked = event.target;

    pixelClicked.style.backgroundColor = colorSelected;
  });
});
