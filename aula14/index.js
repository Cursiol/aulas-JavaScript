let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

// Usar o toFixed não resolve esse problema de 0.9999999999, por o JavaScript deve ler os binarios, então ele continua entendendo que isso é um numero muito fracionado, o correto é usar o parseFloat ou Number para poder transformar em um numero flutuante, e ai sim o motor do JavaScript faz a leitura correta.
num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));




// console.log(num1 + num2); // 3.5

// console.log(num1.toString() + num2);
// console.log(typeof num1); // number

// alterar fixadamente para string
// num1 = num1.toString();
// console.log(typeof num1); // string

// Para ver em binario
// console.log(num1.toString(2));

// Resumir as casas decimais
// console.log(num1.toFixed(2)); // 20.58

// PAre verificar se o numero é inteiro ou não
// console.log(Number.isInteger(num1));

// Para verificar se o numero é NaN
// let temp = num1 * '1';
// console.log(Number.isNaN(temp));

