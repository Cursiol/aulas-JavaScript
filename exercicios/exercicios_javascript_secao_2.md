# Exercícios de JavaScript — Seção 2

**Curso:** JavaScript e TypeScript do básico ao avançado — Luiz Otávio Miranda  
**Nível:** iniciante a intermediário  
**Objetivo:** praticar a lógica de programação e consolidar os fundamentos de JavaScript.

> **Como estudar:** tente resolver cada exercício sem consultar soluções prontas. Teste seu código e procure entender por que ele funciona. Marque cada exercício como concluído quando terminar e validar sua solução.

## Checklist de progresso

- [x] Exercício 1 — Variáveis e tipos de dados
- [ ] Exercício 2 — Operadores aritméticos
- [ ] Exercício 3 — Strings e concatenação
- [ ] Exercício 4 — Números e objeto `Math`
- [ ] Exercício 5 — Arrays
- [ ] Exercício 6 — Funções
- [ ] Exercício 7 — Objetos
- [ ] Exercício 8 — Desafio final: cadastro de estudante

---

## Exercício 1 — Variáveis e tipos de dados

**Nível:** fácil

**Objetivo:** praticar `let`, `const`, strings, números e booleanos.

Crie um programa para registrar os dados de um estudante de programação.

O programa deverá:

1. Criar uma constante com o nome do estudante.
2. Criar uma variável com a idade.
3. Criar uma variável com a linguagem que está estudando.
4. Criar uma variável booleana indicando se ele está empregado.
5. Exibir todas as informações no console, usando `console.log()`.

**Desafio extra:** aumente a idade em 1 e exiba o novo valor.

**Anotações / dúvidas:**

- Data do estudo: 20/10/2026
- Tempo dedicado: 3 min
- Observações: Relativamente facil esse exercicio que o chatGpt me recomendou, mas interessante, usei let e const apenas para poder praticar mesmo, não me senti desafiado, mas achei legal para estar praticando, seguirei realizando os demais exercicios para poder testar meu conhecimento.

---

## Exercício 2 — Operadores aritméticos

**Nível:** fácil

**Objetivo:** praticar soma, subtração, multiplicação, divisão e incremento.

Imagine que você está calculando seu tempo de estudos durante a semana:

- Segunda-feira: 45 minutos.
- Terça-feira: 60 minutos.
- Quarta-feira: 30 minutos.
- Quinta-feira: 90 minutos.
- Sexta-feira: 45 minutos.

Seu programa deve calcular:

1. O total de minutos estudados.
2. O total convertido em horas e minutos.
3. A média de minutos estudados por dia.
4. Quanto falta para atingir uma meta semanal de 5 horas.

**Regra:** faça os cálculos usando variáveis e operadores. Não escreva os resultados manualmente.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Exercício 3 — Strings e concatenação

**Nível:** fácil

**Objetivo:** trabalhar com textos e interpolação usando template literals.

Crie três variáveis:

- `nome`: seu nome.
- `curso`: JavaScript e TypeScript.
- `aulasConcluidas`: quantidade de aulas que você já terminou.

Monte uma mensagem semelhante a esta, usando os valores das variáveis:

> Olá, Lucas! Você está estudando JavaScript e TypeScript e já concluiu 20 aulas.

O número acima é apenas um exemplo.

**Desafio extra:** exiba o tamanho do nome e transforme o nome completo em letras maiúsculas.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Exercício 4 — Números e objeto `Math`

**Nível:** fácil a intermediário

**Objetivo:** praticar cálculos e métodos do objeto `Math`.

Você está desenvolvendo uma calculadora de preços para produtos impressos em 3D. Um produto tem os seguintes custos:

- Filamento: R$ 8,75.
- Energia elétrica: R$ 1,20.
- Desgaste da impressora: R$ 3,50.
- Embalagem: R$ 2,00.

Implemente um programa que calcule:

1. O custo total do produto.
2. O preço de venda com uma margem de 40% sobre o custo.
3. O preço arredondado para duas casas decimais.
4. O maior e o menor valor entre os quatro custos.

**Atenção:** margem sobre o custo significa multiplicar o custo total por `1.40`, não dividir por `0.60`.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Exercício 5 — Arrays

**Nível:** intermediário

**Objetivo:** criar e manipular arrays básicos.

Você tem uma lista de tecnologias que deseja estudar:

```javascript
["HTML", "CSS", "JavaScript"]
```

Faça seu programa:

1. Exibir o primeiro elemento.
2. Exibir o último elemento sem escrever diretamente o índice `2`.
3. Adicionar `"TypeScript"` ao final.
4. Substituir `"CSS"` por `"React"`.
5. Exibir a quantidade de elementos.
6. Exibir a lista completa no console.

**Desafio extra:** crie um segundo array com três tecnologias de back-end e junte os dois arrays em uma nova lista.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Exercício 6 — Funções

**Nível:** intermediário

**Objetivo:** entender parâmetros, retorno e reutilização de código.

Crie uma função chamada `calcularMedia` que receba três notas como parâmetros e retorne a média.

Depois:

1. Chame a função com três notas diferentes.
2. Armazene o retorno em uma variável.
3. Exiba a média no console.
4. Crie outra função chamada `verificarAprovacao` que receba a média e retorne `true` se ela for igual ou superior a 7, e `false` caso contrário.

**Desafio extra:** faça a segunda função utilizar o resultado da primeira, sem repetir os cálculos.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Exercício 7 — Objetos

**Nível:** intermediário

**Objetivo:** representar dados relacionados em um objeto.

Crie um objeto chamado `produto3D` com estas propriedades:

- `nome`
- `material`
- `tempoImpressao` (em horas)
- `custo`
- `precoVenda`

Depois:

1. Exiba o nome do produto.
2. Exiba o material utilizado.
3. Calcule e exiba o lucro bruto, subtraindo o custo do preço de venda.
4. Altere o preço de venda.
5. Adicione uma propriedade chamada `disponivel`, com valor booleano.
6. Exiba o objeto completo.

**Desafio extra:** crie uma função que receba um objeto de produto e retorne seu lucro bruto.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Exercício 8 — Desafio final: cadastro de estudante

**Nível:** desafio

**Objetivo:** juntar variáveis, operadores, strings, arrays, funções e objetos.

Crie um pequeno cadastro de estudante, executado no Node.js ou no console do navegador.

O estudante deverá ter:

- Nome.
- Idade.
- Lista de tecnologias estudadas.
- Três notas.
- Média calculada.
- Situação: aprovado ou reprovado.

### Requisitos

1. Armazene os dados em variáveis.
2. Utilize um array para as tecnologias.
3. Utilize um objeto para representar o estudante.
4. Crie uma função para calcular a média.
5. Crie uma função para verificar a aprovação, considerando média mínima 7.
6. Exiba um relatório completo no console, com todos os dados.

**Regra do desafio:** organize o código para que cada função tenha uma responsabilidade clara. Evite fazer todo o programa em uma única sequência de comandos.

**Anotações / dúvidas:**

- Data do estudo: ____/____/________
- Tempo dedicado: ______ h ______ min
- Observações: ______________________________________________

---

## Revisão pessoal

Depois de concluir os exercícios, responda:

1. Quais exercícios consegui resolver sem ajuda?
2. Em quais precisei consultar minhas anotações?
3. Qual conceito ainda preciso praticar?
4. Consigo explicar meu código com minhas próprias palavras?
5. O que vou revisar na próxima sessão?

**Resumo do estudo**

- Data: ____/____/________
- Tempo total: ______ h ______ min
- Principal aprendizado: ______________________________________
- Dúvidas para revisar: _______________________________________
- Próximo passo: _____________________________________________
