// Solicitar un entero y mostrar por pantalla si es múltiplo de 5 o no lo es.

// TEST DATA 1:
// PMT: 25
// > 25 es múltiplo de 5

// TEST DATA 2:
// PMT: 30
// > 25 no es múltiplo de 5

let numero = Number(prompt('Inserte un número'));
let ultimoCaracterNumero = numero.toString()[numero.toString().length - 1];

if (numero % 5 === 0) {
    console.log(numero + ' es múltiplo de 5');
} else {
    console.log(numero + ' no es múltiplo de 5');
}

// V2 - Solicitar un entero y mostrar por pantalla si es múltiplo de 5 o no lo es.
// En este caso, se deberá de deducir dicho resultado mirando la última cifra del número.
// Norma matemática: son múltiplos de 5 todos los números terminados en cero (0) o cinco (5).

if (ultimoCaracterNumero === '0' || ultimoCaracterNumero === '5') {
    console.log(numero + ' es múltiplo de 5');
} else {
    console.log(numero + ' no es múltiplo de 5');
}