/* 
    OPERADORES ARITMÉTICOS 
    + Adição e Concatenação
    - / *  
    ** Exponenciação
    % Resto da Divisão
*/

const num1 = 5;
const num2 = '10';
console.log(num1 + num2); // Adição / Se um dos vakores for uma stringm, ele retornar uma concatenação
console.log(num1 - num2); // Subtração
console.log(num1 * num2); // Multiplicação
console.log(num1 / num2); // Divisão
console.log(num1 ** num2); // Exponenciação
console.log(num1 % num2); // Resto da Divisão

// Operadores Aritimeticos tambem tem precedencia em JavaScript, ou seja, a ordem de execução dos operadores segue a mesma regra da matemática.******

// Ordem de precedência dos operadores aritméticos:
// 1. Parênteses ()
// 2. Exponenciação (**)
// 3. Multiplicação (*) e Divisão (/)
// 4. Adição (+) e Subtração (-)

let contador = 1;
contador++;
console.log(contador); // Incremento = 2
contador++;
console.log(contador); // Incremento = 3

// Quando o ++ esta apos a variável, ele é chamado de pós-incremento, ou seja, ele vai incrementar o valor da variável depois de executar a linha de código. Exemplo:
let contador2 = 1;
console.log(contador2++); // 1
console.log(contador2); // 2

let contador3 = 1;
console.log(++contador3); // 2

// Operador de decremento (--), ele funciona da mesma forma que o operador de incremento, mas ele decrementa o valor da variável. Exemplo:
let contador4 = 1;
contador4--;
console.log(contador4); // Decremento = 0

// Para realizar o incremento de mais de um valor
const step = 2;
let contador5 = 0;
// contador5 = contador5 + step;
// console.log(contador5); // 2

contador5 += step; // Operador de atribuição +=
console.log(contador5); // 2

// O operador de atribuição pode ser usado com todos os operadores aritméticos, como por exemplo:
let contador6 = 10;
contador6 -= step;
console.log(contador6); // 8