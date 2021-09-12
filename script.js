window.onload = function () {
  let colorValue = '#000000';
  let button = document.getElementById('clear-board');
  button.addEventListener('click', function () {
    clearPixel();
  });

  function clearPixel() {
    let clear = document.getElementsByClassName('pixel');
    for (let value of clear) {
      value.style.backgroundColor = '#ffffff';
    }
  }

  function clickPalette() {
    let colorSelect = document.getElementsByClassName('color');
    colorSelect[0].addEventListener('click', function () {
      selectColor(0);
    });
    colorSelect[1].addEventListener('click', function () {
      selectColor(1);
    });
    colorSelect[2].addEventListener('click', function () {
      selectColor(2);
    });
    colorSelect[3].addEventListener('click', function () {
      selectColor(3);
    });

    function selectColor(n) {
      switch (n) {
        case 0:
          colorValue = '#000000';
          colorPixel(colorValue);
          break;
        case 1:
          colorValue = '#51f504';
          colorPixel(colorValue);
          break;
        case 2:
          colorValue = '#0af3e0';
          colorPixel(colorValue);
          break;
        case 3:
          colorValue = '#6e51a5';
          colorPixel(colorValue);
          break;
        default:
          alert('Select a color');


      }
    }

    function colorPixel(colVal) {
      let pixel = document.getElementsByClassName('pixel');
      for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].addEventListener('click', function () {
          pixel[i].style.backgroundColor = colVal;
        });
      }
    }
    colorPixel(colorValue);
  }
  clickPalette();
}
