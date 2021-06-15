// Pedir tres números al usuario y devolver cual es el mayor.
// Si los tres números son iguales hay que decirselo
// Si, no mete correctamente un número, detener el programa informando al usuario 
// de que hay un error

// 1 - Crear variables
let numeraciones = ["primer", "segundo", "tercer"];
let numerosUsuario = [];
let valorIncorrecto = false;
let numeroMayor = 0;

// 2 - Pedir números al usuario
for (let i = 0; i < numeraciones.length; i++) {

    if (!valorIncorrecto) { // Mientras que el anterior sea correcto
        let numero = +prompt("Indique el " + numeraciones[i] + " número aleatorio");

        if (!isNaN(numero))
            numerosUsuario.push(numero);
        else {
            valorIncorrecto = true;
            break;
        }

    }
}


// 1º: i = 0, numero = 12, numerosUsuario = [12]
// 2º: i = 1, numero = NaN, numerosUsuario = [12]
// 3º: i = 2, numero = 5, numerosUsuario = [12]

// [3, 5, 2, 6, 0];

if (!valorIncorrecto) { // Entro cuando todos los datos son correctos
    // 3 - Obtener número mayor del conjunto
    for (let i = 0; i < numerosUsuario.length; i++) {

        if (numerosUsuario[i] > numeroMayor) {
            numeroMayor = numerosUsuario[i];
        }
    }

    // 4 - Mostrar el número mayor
    // Serie: [2, 7, 1]
    // Numero mayor: 7
    console.log("Serie: " + numerosUsuario + "\nNúmero mayor: " + numeroMayor);
} else {
    console.error("Hay un error de ejecución");
}
