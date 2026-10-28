// ## Exercício 8 — Desafio final: cadastro de estudante

// **Nível:** desafio

// **Objetivo:** juntar variáveis, operadores, strings, arrays, funções e objetos.

// Crie um pequeno cadastro de estudante, executado no Node.js ou no console do navegador.

// O estudante deverá ter:

// - Nome.
// - Idade.
// - Lista de tecnologias estudadas.
// - Três notas.
// - Média calculada.
// - Situação: aprovado ou reprovado.

// ### Requisitos

// 1. Armazene os dados em variáveis.
// 2. Utilize um array para as tecnologias.
// 3. Utilize um objeto para representar o estudante.
// 4. Crie uma função para calcular a média.
// 5. Crie uma função para verificar a aprovação, considerando média mínima 7.
// 6. Exiba um relatório completo no console, com todos os dados.

// **Regra do desafio:** organize o código para que cada função tenha uma responsabilidade clara. Evite fazer todo o programa em uma única sequência de comandos.

const nome = 'Lucas';
const idade = 28;
const tecnologias = ['JavaScript', 'TypeScript', 'React'];
let nota1 = 7;
let nota2 = 10;
let nota3 = 6;


function calcularMedia (nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    return media;
}


function verificarAprovacao (calcularMedia) {
    if (calcularMedia >= 7) {
        return true;
    } else {
        return false;
    }
}

const media = calcularMedia(nota1, nota2, nota3);
const aprovado = verificarAprovacao(media);

const estudante = {
    nome: nome,
    idade: idade,
    tecnologias: tecnologias,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3,
    media: media,
    aprovado: aprovado
}

console.log(`##### Relatorio do Aluno #####`);
console.log(`Nome do Aluno: ${estudante.nome}.`);
console.log(`Idade: ${estudante.idade}.`);
console.log(`Tecnologias Estudadas: ${estudante.tecnologias}.`);
console.log(`Notas: n1 = ${nota1}, n2 = ${nota2}, n3 = ${nota3}.`);
console.log(`Media das notas: ${estudante.media}`);
console.log(`Aprovado? ${estudante.aprovado}`);