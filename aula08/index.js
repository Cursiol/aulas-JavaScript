const nome = 'Lucas Aparecido';
const sobrenome = 'Cursiol';
const idade = 25;
const peso = 80;
const alturaEmM = 1.74;

let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = new Date().getFullYear() - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`Nasceu no ano de ${anoNascimento}.`);