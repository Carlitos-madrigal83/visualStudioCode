// - Pedir tres números y mostrarlos ordenados de mayor a menor. Debe aceptar números negativos y positivos.
// - En caso de cancelar la ejecución del programa se deberá de notificar por consola con un mensaje de error que es el
// siguiente ('Programa finalizado sin ejecución').
// - Deben ser controladas las excepciones, es decir, si el usuario introduce un valor no válido en la petición de números,
// se le pedirá de nuevo hasta que lo introduzca correctamente o de a cancelar para detener el programa.

// M E N S A J E S
// - Serie mensajes solicitud de número: Indica el primer número, Indica el segundo número, Indica el tercer número.
// - Mensaje dato incorrecto: El valor introducido no es un número: 
// - Mensaje resultado ejecución exitosa: Orden de los números de mayor a menor: n, j, k -> consola
// - Mensaje ejecución cancelada: Programa finalizado sin ejecución -> color rojo y por consola.

// 1 - Variables
let numeros = [];
let numeraciones = ['primer', 'segundo', 'tercer'];

let datoOriginal;

do {
// 2 - Petición de los datos
    datoOriginal = prompt('Indique el ' + numeraciones[0] + ' número');

    // Comprobar si quiere finalizar la ejecución
    if (datoOriginal !== null) { // Mientras no le de a cancelar
        // Pedir dato
        let dato = +datoOriginal;

        // Comprobar dato
        if (!isNaN(dato)) { // El dato es un número
            numeros.push(dato);
        } else { // El dato no es un número
            console.log("El valor introducido no es un número");
        }
    }
} while (datoOriginal !== null && numeros.length !== 3); // Cuando se introduzcan tres números correctos o le de a cancelar





    // 3 - Ordenar números

    // 4 - Mostrar el resultado
