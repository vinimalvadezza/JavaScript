// Funçoes
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

let x = addNums(4, 5); //Chamada de função addNums
console.log(x);

let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
}

//arrow functions
console.clear();
const hello = () => {
    return 'Olá Arrow Function';
};

console.log(hello); // retorno o objetivo função
console.log(hello()); //executa a função e impremi a string no return


console.clear();
const addNumes2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
};

let soma = addNumes2(5, 10);
console.log(soma);

// Eventos
console.clear(); 
const boasVindas = () => { 
    alert('Bem vindo a nossa página');
    console.log('Bem vindo a nossa página');
};

const eventClique = () => { 
    console.log('Você clicou no botão'); 
};

const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
};
