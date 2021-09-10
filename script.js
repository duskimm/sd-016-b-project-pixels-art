function createPixel(className, parent) {
  let newPixel = document.createElement('div');
  newPixel.className = className;
  parent.appendChild(newPixel);
}

let lines = document.getElementsByClassName('pixel-line');

for (let index = 0; index < lines.length; index += 1) {
  for (let i = 1; i <= 5; i += 1) {
    createPixel('pixel', lines[index]);
  }
  console.log(lines[index]);
}