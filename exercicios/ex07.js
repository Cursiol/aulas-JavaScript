// <!-- ## Exercício 7 — Objetos

// **Nível:** intermediário

// **Objetivo:** representar dados relacionados em um objeto.

// Crie um objeto chamado `produto3D` com estas propriedades:

// - `nome`
// - `material`
// - `tempoImpressao` (em horas)
// - `custo`
// - `precoVenda`

// Depois:

// 1. Exiba o nome do produto.
// 2. Exiba o material utilizado.
// 3. Calcule e exiba o lucro bruto, subtraindo o custo do preço de venda.
// 4. Altere o preço de venda.
// 5. Adicione uma propriedade chamada `disponivel`, com valor booleano.
// 6. Exiba o objeto completo.

// **Desafio extra:** crie uma função que receba um objeto de produto e retorne seu lucro bruto. -->

const produto3d = {
    nome : 'Suporte',
    material : 'PETG',
    tempoImpressao : 5,
    custo : 2.50,
    precoVenda: 9.40
};

console.log(`Nome do produto: ${produto3d.nome}`);
console.log(`Material do produto: ${produto3d.material}`);

let lucroBruto = produto3d.precoVenda - produto3d.custo;
console.log(`Meu Lucro bruto ${lucroBruto}`);

produto3d.precoVenda = 15;
console.log(`Preço de venda alterado: ${produto3d.precoVenda}`);

produto3d.disponivel = true;

console.log(produto3d);

function calcularLucro (produto) {
    return produto.precoVenda - produto.custo
};

console.log(calcularLucro(produto3d));