//             0123456789 ----- 
// const nome = ('Lucas Cursiol');
// console.log(nome[0]);

// Array é indexido por elemento e não por caracteres como a String
//                 0        1        2         3
const alunos = ['Lucas', 'Luiz', 'Carlos', 'Marcos'];
// console.log(alunos);
// console.log(alunos[1]);
// console.log(alunos[2]);

// alunos[0] = 'Eduardo';
// alunos[4] = 'Joclicleber'

// alunos[alunos.length] = 'Craudinho';  add ao fim do array
// alunos[alunos.length] = 'Lucio';
// alunos[alunos.length] = 'Ronaldo';
// alunos[alunos.length] = 'DenilsonShow';

// console.log(alunos);

// alunos.push('Luiza'); Adiciona ao final do array
// alunos.push('Fabio');

// alunos.unshift('Luiza'); Add do inicio do array
// alunos.unshift('Fabio');

// const removido = alunos.pop(); remove o ultimo index do array e pode ser colocado em uma variavel
// const removInicio = alunos.shift(); remove o primeiro index de um array e pode ser colocado em uma variavel

// console.log(alunos);
// console.log(removido);
// console.log(removInicio);

// delete alunos[1]; deleta um item do array e deixa o index em branco

// alunos.push('Bruno');

// console.log(alunos.slice(0,2)); fatiamento de array, bem parecido com string
// console.log(alunos.slice(0,-2));

console.log(typeof alunos); //  o JS entende um array no typeOf como um object
console.log(alunos instanceof Array); //Para verificar se é um array mesmo ou não

// O melhor metodo para adicionar no array, é usando o push, sempre adicionando ao final do array, que ficar mexendo no inicio do array pode dar ruim