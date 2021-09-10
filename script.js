window.onload = function () {
    createLines();
    createPixels();

    function newChild(type, text, classs, id) {
        let newChildItem = document.createElement(type);
        newChildItem.innerText = text;
        if (classs !== '') {
            newChildItem.className = classs;
        }
        if (id !== '') {
            newChildItem.id = id;
        }
        return newChildItem;
    }

    function createLines() {
        let board = document.querySelector('#pixel-board');
        for (let index = 0; index < 5; index += 1) {
            board.append(newChild('div', '', 'line', ''));
        }
    }

    function createPixels() {
        let lines = document.querySelectorAll('.line');
        for (let line of lines) {
            for (let index = 0; index < 5; index += 1) {
                line.append(newChild('div', '', 'pixel', ''));
            }
        }
    }
}
