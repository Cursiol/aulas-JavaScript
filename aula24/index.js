// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem de condições
// só posso ter um else na checagem
// poremos usar condições sem else if, utilizando apenas o if

const hora = 12;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia Kandang0');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde Kandango');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite Kandango');
} else {
    console.log('Seja bem vindo');
}