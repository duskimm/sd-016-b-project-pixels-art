const predefinedColors = ['black', 'red', 'blue', 'orange']

function createColorPallete() {
    const container = document.createElement('div');
    container.id = 'color-palette';

    for (let color of predefinedColors) {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;

        container.appendChild(colorDiv);

        console.log(color);
    }

    document.body.appendChild(container);
}

window.onload = function () {
    createColorPallete();

    console.log('ready');
}
