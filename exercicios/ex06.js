// ## Exercício 6 — Funções

// **Nível:** intermediário

// **Objetivo:** entender parâmetros, retorno e reutilização de código.

// Crie uma função chamada `calcularMedia` que receba três notas como parâmetros e retorne a média.

// Depois:

// 1. Chame a função com três notas diferentes.
// 2. Armazene o retorno em uma variável.
// 3. Exiba a média no console.
// 4. Crie outra função chamada `verificarAprovacao` que receba a média e retorne `true` se ela for igual ou superior a 7, e `false` caso contrário.

// **Desafio extra:** faça a segunda função utilizar o resultado da primeira, sem repetir os cálculos.

function calcularMedia (n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    return media;
}

function verificarAprovacao (n1, n2, n3) {
    const media = calcularMedia(n1 , n2 , n3);
    if (media >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}
 
console.log(calcularMedia(5, 10, 10));
verificarAprovacao(5, 10, 10);