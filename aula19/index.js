// Valores Primitivos e valores por referência 

/* 
Primitivos (Imutaveis) - strinf, number, boolean, undefined, null (bigint, symbol)

*/

// let nome = 'Lucas';
// nome[0] = 'R'; // é Imutavel
// console.log(nome[0], nome);

// let a = 'A';
// let b = a; // Estou criando a copia de uma variavel
// console.log(a, b);

// a = 'outra coisa'
// console.log(a, b);



/*
Referencia (Mutavel) - Array, object, function - Passados por referência
*/

// let a = [1, 2, 3,];
// let b = [...a]; // Spread, dessa maneira voce cria uma copia do array, assim não é sempre tudo alterado junto
// let c = b;

// console.log(a, b); // Se eu alterar alguma das duas variaveis, os valores de ambas serão alterados, ja que o array é mutavel.

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b, c);

const a = {
    nome: 'Lucas',
    sobrenome: 'Cursiol'
};

const b = {...a}; //Spread
a.nome = 'Kaka';

console.log(a, b);