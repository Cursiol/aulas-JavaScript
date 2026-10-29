// console.log('Lucas Cursiol' && true && 'Maria')

//Em javaScript todo valor é avaliado em true ou false 
// FALSY = false, 0, "" '' ``, null / undefined / NaN


// console.log('Luiz' && undefined && 'MAria');

// function falaOI () {
//     return 'Oi';
// }

// let vaiExecutar = 'Joaozim';

// console.log(vaiExecutar && falaOI());


//  console.log(0 || false || null || 'Lucas' || true);

const corUsuario = 'blue';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // retornou esse valor, que é um valor preenchido dentro de uma string, que esta preenchida então o JS reconhece como true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);