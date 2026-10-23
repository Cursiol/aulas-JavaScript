// ## Exercício 5 — Arrays

// **Nível:** intermediário

// **Objetivo:** criar e manipular arrays básicos.

// Você tem uma lista de tecnologias que deseja estudar:

// ```javascript
// ["HTML", "CSS", "JavaScript"]
// ```

// Faça seu programa:

// 1. Exibir o primeiro elemento.
// 2. Exibir o último elemento sem escrever diretamente o índice `2`.
// 3. Adicionar `"TypeScript"` ao final.
// 4. Substituir `"CSS"` por `"React"`.
// 5. Exibir a quantidade de elementos.
// 6. Exibir a lista completa no console.

// **Desafio extra:** crie um segundo array com três tecnologias de back-end e junte os dois arrays em uma nova lista.

const listaCurso = ['HTML', 'CSS', 'JavaScript'];

console.log(listaCurso[0]);
console.log(listaCurso.at(-1));

listaCurso.push = 'TypeScript';
console.log(listaCurso);

listaCurso[1] = 'React';
console.log(listaCurso);

console.log(listaCurso.length)
