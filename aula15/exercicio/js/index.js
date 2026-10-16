const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arredondaBaixo = document.getElementById('arredondaBaixo');
const arredondaCima = document.getElementById('arredondaCima');
const decimal = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p> A Raiz quadrada: ${numero ** 0.5}</p>`;
inteiro.innerHTML = `<p> ${numero} é intero: ${Number.isInteger(numero)}</p>`;
nan.innerHTML = `<p> É NaN: ${Number.isNaN(numero)}</p>`;
arredondaBaixo.innerHTML = `<p> Arredondamento para Baixo: ${Math.floor(numero)}</p>`;
arredondaCima.innerHTML = `<p> Arredondamento para Baixo: ${Math.ceil(numero)}</p>`;
decimal.innerHTML = `<p> Arredondamento para Baixo: ${numero.toFixed(2)}</p>`;