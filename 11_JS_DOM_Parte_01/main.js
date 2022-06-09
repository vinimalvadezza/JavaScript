// JavaScript e DOM
// Objetos document
console.log(document);

// Acessar essa informaçoes
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o Título
document.title = 123;
//Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos';
document.body.appendChild(heading);
cabecalho.style.borderBottom = 'solid 3px #000';