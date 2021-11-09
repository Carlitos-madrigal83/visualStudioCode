let a = 10;

function pasoValor(a) {
    a = 20;
    console.log({ a });

}

pasoValor(a);

console.log({ a }); // 10


let persona = {
    nombre: "Alex",
    edad: 26
}

function cambiarEdad(obj) {
    obj.edad++;

    console.log("obj.edad: ", obj.edad); // 27
}

cambiarEdad(persona);

console.log("persona.edad: ", persona.edad); // 27

// Evoluciones parámetros predeterminados

function multiplicacion1(a, b) {
    console.log(a);
    console.log(b);

    if (typeof b === 'undefined') {
        b = 1
    }

    console.log(a * b);
}

multiplicacion1(5);



function multiplicacion2(a, b) {
    console.log(a);
    console.log(b);

    b = (typeof b === 'undefined') ? 1 : b;

    console.log(a * b);
}

multiplicacion2(5);


function multiplicacion3(a, b) {
    // console.log(a);
    // console.log(b);

    b = b || 1;
    return a * b;
    //console.log(a * b);
}

multiplicacion3(5, 0);


function multiplicacion4(a, b = 1) {
    // console.log(a);
    // console.log(b);
    return a * b;

    //console.log(a * b);
}

multiplicacion4(5, 0);

