function exercicioUm(){
    let capturaHeader = document.querySelector('header');
    let criarTitulo = document.createElement('h1');
    criarTitulo.id = 'title';
    criarTitulo.innerHTML = 'Paleta de Cores';
    capturaHeader.appendChild(criarTitulo);
}
exercicioUm();

