// Solicitar un entero y mostrar por pantalla si es positivo, negativo o nulo.

// TEST DATA 1:
// PMT: 12
// > 12 es positivo

// TEST DATA 2:
// PMT: -3
// > -3 es negativo

// TEST DATA 3:
// PMT: 0
// > 0 es nulo

let numero = +prompt('Inserte un número');
if (numero > 0) {
    console.log(numero + ' es positivo');
} else if (numero < 0) {
    console.log(numero + ' es negativo');
} else {
    console.log(numero + ' es nulo');
}
