// Objetos 

// const pessoa1 = {
//     nome: 'Lucas',
//     sobrenome: 'Cursiol',
//     idade: 25
// };

// console.log(pessoa1);

// Função Factory
// function criaPessoa (nome, sobrenome, idade) { 
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Lucas', 'Cursiol', '28');
// const pessoa2 = criaPessoa('João', 'Lazaro', '48');
// const pessoa3 = criaPessoa('Junin', 'Silva', '58');
// const pessoa4 = criaPessoa('Luan', 'Santos', '18');

// console.log(pessoa1, pessoa2, pessoa3, pessoa4);

const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Cursiol',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();