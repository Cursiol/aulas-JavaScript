// ## Exercício 2 — Operadores aritméticos

// **Nível:** fácil

// **Objetivo:** praticar soma, subtração, multiplicação, divisão e incremento.

// Imagine que você está calculando seu tempo de estudos durante a semana:

// - Segunda-feira: 45 minutos.
// - Terça-feira: 60 minutos.
// - Quarta-feira: 30 minutos.
// - Quinta-feira: 90 minutos.
// - Sexta-feira: 45 minutos.

// Seu programa deve calcular:

// 1. O total de minutos estudados.
// 2. O total convertido em horas e minutos.
// 3. A média de minutos estudados por dia.
// 4. Quanto falta para atingir uma meta semanal de 5 horas.

// **Regra:** faça os cálculos usando variáveis e operadores. Não escreva os resultados manualmente.

const tempSegunda = 45;
const tempTerça = 60;
const tempQuarta = 30;
const tempQuinta = 90;
const tempSexta = 45;

let soma = tempSegunda + tempTerça + tempQuarta + tempQuinta + tempSexta

console.log(`Voce estudou um total de: ${soma} minutos.`);
console.log(`Teve um total em horas de ${soma / 60}`);
console.log(`Em uma media de ${soma / 5} minutos por dia`);
console.log(`E falta ${5 - (soma / 60)} horas para atingir a meta de 5 horas`);