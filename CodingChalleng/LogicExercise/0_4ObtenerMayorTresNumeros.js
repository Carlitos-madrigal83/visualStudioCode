// Pedir tres números al usuario y devolver cual es el mayor.
// Si los tres números son iguales hay que decirselo
// Si, no mete correctamente un número, detener el programa informando al usuario 
// de que hay un error
let numbersUser1 = +prompt('Inserte un numero');
let numbersUser2;
let numbersUser3;

let numerosValidos = false;

if (!Number.isNaN(numbersUser1)) {

    numbersUser2 = +prompt('Inserte un numero');

    if (!Number.isNaN(numbersUser2)) {

        numbersUser3 = +prompt('Inserte un numero');

        if (Number.isNaN(numbersUser3)) {
            numerosValidos = true;


        }

    }

}

if (numerosValidos) {

    if (Number.isNaN(numbersUser1)) {
        console.log('El número que ha introducido no es válido');
    } else if (Number.isNaN(numbersUser2)) {
        console.log('El número que ha introducido no es válido');
    } else if (Number.isNaN(numbersUser3)) {
        console.log('El número que ha introducido no es válido');
    } else if (numbersUser1 > numbersUser2 && numbersUser1 > numbersUser3) {
        console.log('El mayor es ' + numbersUser1);
    } else if (numbersUser2 > numbersUser3) {
        console.log('El mayor es ' + numbersUser2);
    } else if (numbersUser3 > numbersUser2) {
        console.log('El mayor es ' + numbersUser3);
    } else {
        console.log('Los tres números que ha introducido son iguales');
    }
} else {
    console.log('El número que ha introducido no es válido');
}






// Errores:
// - Números + otros símbolos(Ej: 123abc) 
// - Que inserte decimales (Ej: 15,25)
// - Cadena vacía (Ej: "")

// Opción de salida
// - De a cancelar (null)