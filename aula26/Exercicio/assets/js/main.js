const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#input-peso');
    const inputAltura = event.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Sei IMC é ${imc} sua classificação é ${nivelImc}.`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5)  return nivel[0];

}

function getIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

}





// function calcularIMC () {
//     const peso = document.getElementById('input-peso');
//     const altura = document.getElementById('input-altura');

//     const imc = peso.value / (altura.value * altura.value);
//     console.log(imc);
//     return imc;
// }

// function classificarIMC (imc) {
//     if (imc < 18.5) {
//         resultado.innerHTML = 'Abaixo do peso';
//     } else if (imc >= 18.5 && imc > 24.9) {
//         resultado.innerHTML = 'Peso normal';
//     } else if (imc >= 25 && imc > 29.9) {
//         resultado.innerHTML = 'Sobrepeso';
//     } else if (imc >= 30 && imc > 34.9) {
//         resultado.innerHTML = 'Obesidade grau 1';
//     } else if (imc >= 35 && imc > 39.9) {
//         resultado.innerHTML = 'Obesidade grau 2';
//     } else if (imc >= 40) {
//         resultado.innerHTML = 'Obesidade grau 3';
//     }

//     resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${resultado.innerHTML}`;
// }
// classificarIMC(calcularIMC());
