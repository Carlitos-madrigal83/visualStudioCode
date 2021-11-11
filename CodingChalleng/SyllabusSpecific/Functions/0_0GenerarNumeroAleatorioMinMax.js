// Crear una función llamada "generarNumeroAleatorioMinMax" que se le pase dos parámetros, un número mínimo y un número máximo.
// Deverá devolver el número aleatorio entre [min - max)


// definición de función
function generarNumeroAleatorioMinMax(numMin, numMax) {
    let numPosibilidades = numMax - numMin;
    let numAleatorio = Math.round(Math.random() * numPosibilidades);
    return numAleatorio + numMin;
}
console.log("generarNumeroAleatorioMinMax :", generarNumeroAleatorioMinMax(6, 20));

// función de expresión
const generarNumeroAleatorioMinMax2 = function (numMin, numMax) {
    return Math.round(Math.random() * (numMax - numMin) + numMin);
}
console.log("generarNumeroAleatorioMinMax2:", generarNumeroAleatorioMinMax2(6, 20));


// función de flecha sin retorno explícito
const generarNumeroAleatorioMinMax3 = (numMin, numMax) => Math.round(Math.random() * (numMax - numMin) + numMin);

console.log("generarNumeroAleatorioMinMax3:", generarNumeroAleatorioMinMax3(6, 20));
