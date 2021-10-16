// Solicitar un número e imprimir dicho número separando sus dígitos con el operador de incremento
// y devolviendo el resultado de la suma de todos los dígitos. Mostrar de cuantos dígitos
// se forma el número.

// TEST DATA:
// PMT: 275
// > 2 + 7 + 5 = 14
// > Número dígitos: 3

let numeroUsuario = prompt('Inserte un número');
console.log(numeroUsuario[0] + ' + ' + numeroUsuario[1] + ' + ' + numeroUsuario[2] + ' = ' + (+numeroUsuario[0] + +numeroUsuario[1] + +numeroUsuario[2]));
console.log('Número dígitos: ' + numeroUsuario.length);

