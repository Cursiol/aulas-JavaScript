// ## Exercício 1 — Variáveis e tipos de dados

// **Nível:** fácil

// **Objetivo:** praticar `let`, `const`, strings, números e booleanos.

// Crie um programa para registrar os dados de um estudante de programação.

// O programa deverá:

// 1. Criar uma constante com o nome do estudante.
// 2. Criar uma variável com a idade.
// 3. Criar uma variável com a linguagem que está estudando.
// 4. Criar uma variável booleana indicando se ele está empregado.
// 5. Exibir todas as informações no console, usando `console.log()`.

// **Desafio extra:** aumente a idade em 1 e exiba o novo valor.


const nomeEstudante = 'Lucas';
let idade = 28;
const linguagem = 'JavaScript';
let estaEmpregado = true;

console.log(`Meu nome é ${nomeEstudante}, tenho ${idade}, estou estudando ${linguagem}, e no momento estou empregado, isso é ${estaEmpregado}!!`)
idade++;
console.log(idade);