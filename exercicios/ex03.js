// ## Exercício 3 — Strings e concatenação

// **Nível:** fácil

// **Objetivo:** trabalhar com textos e interpolação usando template literals.

// Crie três variáveis:

// - `nome`: seu nome.
// - `curso`: JavaScript e TypeScript.
// - `aulasConcluidas`: quantidade de aulas que você já terminou.

// Monte uma mensagem semelhante a esta, usando os valores das variáveis:

// > Olá, Lucas! Você está estudando JavaScript e TypeScript e já concluiu 20 aulas.

// O número acima é apenas um exemplo.

// **Desafio extra:** exiba o tamanho do nome e transforme o nome completo em letras maiúsculas.

const nome = 'Lucas Aparecido Cursiol';
const curso = 'JavaScript e TypeScript';
const aulaConcluida = '20';

console.log(`Olá, ${nome}! Você está estudando ${curso}, e já concluiu ${aulaConcluida} aulas.`);

console.log(`Seu nome tem ${nome.length} caracteres contando espaços.`);
console.log(`Escrito todo em maiscula: ${nome.toUpperCase()}`);