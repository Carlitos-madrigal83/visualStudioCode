// - Pedir tres números y mostrarlos ordenados de mayor a menor. Debe aceptar números negativos y positivos.
    // - En caso de cancelar la ejecución del programa se deberá de notificar por consola con un mensaje en error que es el
    // siguiente ('Programa finalizado sin ejecución').
    // - Deben ser controladas las excepciones, es decir, si el usuario introduce un valor no válido en la petición de números,
    // se le pedirá de nuevo hasta que lo introduzca correctamente o de a cancelar para detener el programa.

    // M E N S A J E S
    // - Serie mensajes solicitud de número: Indica el primer número, Indica el segundo número, Indica el tercer número.
    // - Mensaje dato incorrecto: El valor introducido no es un número: 
    // - Mensaje resultado ejecución exitosa: Orden de los números de mayor a menor: n, j, k -> consola
    // - Mensaje ejecución cancelada: Programa finalizado sin ejecución -> color rojo y por consola.

    let numeros = [];
    let numeraciones = ['primer', 'segundo', 'tercer'];

    for (let i = 0; i < numeraciones.length; i++) {
        numeros.push(prompt('Indique el' + numeraciones[i] + ' número'));
    }

    numeros[0] > numeros[1]
    console.log(numeros);