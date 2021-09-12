const body = document.getElementById('body');

function pageTitle(string) {
  let title = document.createElement('h1');
  title.id = 'title';
  title.innerText = string;
  body.appendChild(title);
}

pageTitle('Paleta de Cores');