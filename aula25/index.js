const numero = 15;

// if (numero >= 0 && numero <= 5) {
//     console.log('Sim, o número é maior igual a zero');
// } else {
//     console.log('Não, não esta entre 0 e 5');
// }

// Bloco 1
if (1 === 1) {
    console.log('Numero LITEAL');
}

// Bloco 2
if (numero > 10) {
    console.log('Numero é maior que 10')
}

// Bloco 3
if (numero >= 0 && numero <= 5) {
    console.log('Sim, o número é maior igual a zero');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número esta entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não esta entre 0 e 11');
}

// as condições do if precisam estar dentro do mesmo bloco, acima separei uns blocos de exemplo, que para ter condições diferentes para mesma informação, pode criar blocos de condições diferentes, para não ter o risco de bugar as condições, se precisar de mais de uma condição de uma mesma informação;