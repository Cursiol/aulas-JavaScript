// function saudacao (nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Luiz');
// console.log(variavel);

// function soma (num1, num2) {
//     const resultado = num1 + num2;
//     return resultado; // quando o enterpretador encontra o return, ele automaticamente encerra a função, se vier qualquer coisa abaixo disso não será executado.
// }

// console.log(soma(5,9));
// console.log(soma(8,2));

// console.log(soma(6,9)); // tem que ter os valores quando for mostrar uma função, se não colocar nada, vai retornar NaN ou undefined, ou tem que definir esse valores quando for montar a função

// console.log(resultado); // Da erro  ja que como é uma variaval que esta dentro de uma funcção, não pode modificar

const raiz = function (n) {
    return n ** 0.5;
}; // no caso quando declara uma variavel, atribuindo a ela uma função, precisa terminar com ponto e virgula, quando é apenas a função mesmo, sem atribuir a uma variavel, pode terminar sem o ponto e virgula.

console.log (raiz(9));
console.log (raiz(16));
console.log (raiz(25));

//arial Function

const soma = (n) => n + 6; // Função simplificada

console.log (soma(5));