// Devolver de un array con nombres, dichos nombres de forma aleatoria por cada recarga del navegador.
// Para hacer esto, hay que crear una función llamada "devolverValoresAleatoriosArray" la cual tiene que 
// recibir solo un valor, el array con el que operar. La función deberá devolver el resultado.


// Función definición

let names = ['Ana', 'Carlos', 'Laura', 'Carla', 'Dani', 'Luisa'];
function devolverValoresAleatoriosArray(arr) {
    let indexRandom = Math.round(Math.random() * (arr.length - 1));
    console.log(indexRandom);
    // Tienes que generar de forma aleatoria los números del array,( índices ) de 0 a 5
    console.log(arr[indexRandom]);


}
devolverValoresAleatoriosArray(names);

// Función expresión

// Función flecha (arrow function)