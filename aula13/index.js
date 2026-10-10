// let umaString = "Um \"texto\"";

// console.log(umaString);

//Strings são indexadas, ou seja, cada caractere da string possui um index, que começar por zero. Por exemplo, a letra "U" da string acima está no index 0, a letra "m" está no index 1 e assim por diante.

//               01234567
let umaString = "Um texto";

console.log(umaString[3]);

console.log(umaString[8]);

console.log(umaString[-3]);

console.log(umaString.charAt(8)); //retorna vazio se estiver fora do index

// Formas de concatenação
console.log(umaString.concat(` em um dia maravilhoso Deus é Poderoso`));
console.log(umaString + ` em um dia maravilhoso Deus é Incrivel`);
console.log(`${umaString} em um dia maravilhoso Deus é Incrivel`);

// como saber qual o indice de uma letra ou palavra dentro de uma string
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3)); //começa a procurar a partir do index 3

console.log(umaString.lastIndexOf('m', 3)); //começa a procurar a partir do index 3, mas de trás para frente

// expressões regulares
console.log(umaString.match(/[a-z]/g)); //retorna um array com todas as letras minúsculas
console.log(umaString.search(/[x]/)); //retorna o index da primeira letra que encontrar, se não encontrar retorna -1
console.log(umaString.replace('Um','Doida')); //substitui a primeira palavra encontrada

let travaLingua = 'O rato roeu a roupa do rei de Roma.';
console.log(travaLingua.replace(/r/, '#')); //substitui a primeira letra encontrada
console.log(travaLingua.replace(/r/g, '#')); //substitui todas as letras encontradas

console.log(travaLingua.length); //retorna o tamanho da string

console.log(travaLingua.slice(2,6)) //retorna a string do index 2 até o index 6, mas não inclui o index 6

console.log(travaLingua.slice(-5)); //retorna os últimos 5 caracteres da string