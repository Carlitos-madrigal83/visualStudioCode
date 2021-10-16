// Solicitar dos enteros y saber cual de los dos es mayor. En caso de que ambos sean igual
// indicarlo por consola.

// TEST DATA 1
// PMT: 12
// PMT: 45
// > Numeros: 12 y 45
// > El mayor es 45

// TEST DATA 2
// PMT: 36
// PMT: 36
// > Numeros: 36 y 36
// > Los números son iguales a 36

let numUsuario = +prompt('Inserte el primer numero');
let numUsuario2 = +prompt('Inserte el segundo número');

console.log('Numeros: ' + numUsuario + ' y ' + numUsuario2);

if (numUsuario > numUsuario2) {
    console.log('El mayor es ' + numUsuario2);
} else if (numUsuario < numUsuario2) {
    console.log('El mayor es ' + numUsuario2);
} else {
    console.log('Los números son iguales a ' + numUsuario);
}

