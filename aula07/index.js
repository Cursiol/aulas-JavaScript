// Não podemos criar CONSTANTES com palavras reservadas
// CONSTANTES precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos sempre camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

// Caso precise modificar o calor de uma const, alterar para let, mas o ideal é que não se faça isso.

// const nome = 'Lucas';
// console.log(nome);

// String = "Text" | Number = Número

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 6;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);