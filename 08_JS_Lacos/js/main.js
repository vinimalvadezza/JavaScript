 // while
let contador = 1;

while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

// while com decretamento
console.clear();
let cont = 10;

while (cont >= 0) {
    console.log(`Valor = ${cont}`);
    cont--;
}

// do-while
console.clear();
let i = 0,
    text = '';
do {
    text += `O numero é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

// For
console.clear();
for (let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);

// For - Decremento
console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);

// Laços de arrays
const frutas = ['apples', 'oranges', 'pears', 10, true];
console.clear();
for (let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);