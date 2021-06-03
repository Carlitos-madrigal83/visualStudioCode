// E J E C U C I Ó N
<<<<<<< HEAD
// - Pedir n números por ventana emergente y se dejará de pedir cuando el usuario le de a cancelar. Una vez capturado
// todos los números se le solicitará al usuario en que orden quiere mostrarlos (asc - desc).
// - Debe aceptar números negativos y positivos.
// - Deben ser controladas las excepciones, es decir, si el usuario introduce un valor no válido en la petición de números,
// se le pedirá de nuevo hasta que lo introduzca correctamente o de a cancelar para detener el programa.

// M E N S A J E S
// - Serie mensajes solicitud de número: Indica el 1º número, Indica el 2º número, ..., Indica el nº número.
// - Mensaje dato incorrecto: El valor introducido no es un número: 
// - Mensaje resultado ejecución exitosa: Orden de los números de mayor a menor: n, j, k -> consola
// - Mensaje ejecución cancelada: Programa finalizado sin ejecución -> color rojo y por consola.

// 1- Crear variables: ordenNumeros:number, numerosUsuario:[],

// Variables

let ordenNumeros = '';
let numerosUsuario = [];

//Pedir 10 números aleatorios al usuario

for (let i = 1; i < 11; i++) {
    let numbers = +prompt('Introduce el ' + [i] + 'º número aleatorio')
    if (numbers !== NaN) {
        numerosUsuario.push(parseInt(numbers))
        console.log(numerosUsuario);
    }
}
/*
while (ordenNumeros == '') {
    numerosElegidos = +prompt('Introduce un número aleatorio')
    if (numerosElegidos != NaN) {
        numerosUsuario.push(parseInt(numerosElegidos))
        console.log(numerosUsuario);
    }
    let continuar = confirm('¿Quiere añadir algún número más?')
    if (!continuar) {
        ordenNumeros = 'y'
    }
} {
    console.log(numerosUsuario)

}
*/
/*
const arreglo = [20, 50, 10, 1, 80, 20, 80, 60];
console.log("Antes de ordenar: ", arreglo);
arreglo.sort((unNumero, otroNumero) => unNumero - otroNumero);
console.log("Después de ordenar: ", arreglo);
*/
=======
    // - Pedir n números por ventana emergente y se dejará de pedir cuando el usuario le de a cancelar. Una vez capturado
    // todos los números se le solicitará al usuario en que orden quiere mostrarlos (asc - desc).
    // - Debe aceptar números negativos y positivos.
    // - Deben ser controladas las excepciones, es decir, si el usuario introduce un valor no válido en la petición de números,
    // se le pedirá de nuevo hasta que lo introduzca correctamente o de a cancelar para detener el programa.

    // M E N S A J E S
    // - Serie mensajes solicitud de número: Indica el 1º número, Indica el 2º número, ..., Indica el nº número.
    // - Mensaje dato incorrecto: El valor introducido no es un número: 
    // - Mensaje resultado ejecución exitosa: Orden de los números de mayor a menor o menor a mayor: n, j, k -> consola
    // - Mensaje ejecución cancelada: Programa finalizado sin ejecución -> color rojo y por consola.

    // CONSOLA
    /* 
        1º -    4
        2º -   10
        3º -   12
        4º -  200
        5º - 1234
    */

    // Variables: numero:number, arr:number[], nombre:string, correcto:boolean

    // CASOS DE USO -> Ejecución correcta y las erroneas


    // Testing -> generar todos los casos de uso

>>>>>>> 4a9bcd4072d03e7f1adc1bb010bca326d0976143
