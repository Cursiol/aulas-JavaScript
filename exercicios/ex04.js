// ## Exercício 4 — Números e objeto `Math`

// **Nível:** fácil a intermediário

// **Objetivo:** praticar cálculos e métodos do objeto `Math`.

// Você está desenvolvendo uma calculadora de preços para produtos impressos em 3D. Um produto tem os seguintes custos:

// - Filamento: R$ 8,75.
// - Energia elétrica: R$ 1,20.
// - Desgaste da impressora: R$ 3,50.
// - Embalagem: R$ 2,00.

// Implemente um programa que calcule:

// 1. O custo total do produto.
// 2. O preço de venda com uma margem de 40% sobre o custo.
// 3. O preço arredondado para duas casas decimais.
// 4. O maior e o menor valor entre os quatro custos.

// **Atenção:** margem sobre o custo significa multiplicar o custo total por `1.40`, não dividir por `0.60`.

const filamento = 8.75;
const consumoEnergia = 1.20;
const consumoImpressora = 3.50;
const embalagem = 2;

let custo = filamento + consumoEnergia + consumoImpressora + embalagem;
let precoVenda = custo * 1.40;

console.log(`Custo do Produto: R$ ${custo}.`);
console.log(`Preço de venda: R$ ${precoVenda}.`);
console.log(`Valor arredondado: R$ ${Math.ceil(precoVenda)}`);
console.log(`O maior custo é: R$ ${Math.max(filamento, consumoEnergia, consumoImpressora, embalagem)}`);
console.log(`O menor custo é: R$ ${Math.min(filamento, consumoEnergia, consumoImpressora, embalagem)}`);