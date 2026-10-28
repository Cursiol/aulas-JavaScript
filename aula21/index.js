/* 
Operadores de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
== Igualdade (Valor) *********** não usa *************
=== Igualdade estrita (Valor e Tipo)
!= Diferente *********** não usa *************
!== Diferente estrito (Valor e Tipo)
*/

const comp = 5 >= 7;
console.log(comp);

const comp1 = 5 <= 7;
console.log(comp1);

// const num1 = 6;
// const num2 = 9;
// const comp3 = num1 < num2;
// console.log(comp3);

const num1 = 6; // não usar isso
const num2 = '6';
const comp3 = num1 == num2;
console.log(comp3);

const num3 = 6;
const num4 = '6';
const comp4 = num1 === num2; // usar esse operador
console.log(comp4);

const num5 = 6;
const num6 = '6';
const comp5 = num5 !== num6;
console.log(comp5);
