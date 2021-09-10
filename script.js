function h1Title (){
  let body = document.querySelector('body');
  let h1 = document.createElement('h1');
  h1.innerText = "Paleta de Cores";
  h1.id = "title";
  body.appendChild(h1);
};
h1Title();