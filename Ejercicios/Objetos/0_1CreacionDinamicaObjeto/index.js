//let nuevaPropiedad = prompt("¿Que propiedad quiere crear?");
let obj = { a: 4 };
let key, value, optionUser;

if (!Object.keys(obj).length) {
    console.log("El Objeto esta vacio", obj);
}

console.log("1- Agregar propiedad \n2- Salir");
optionUser = prompt("Elija una opcion del menu");


switch (optionUser) {
    case "1":
        console.log("Opción 1- ");
        break;

    case "2":
        console.log("Programa finalizado");
        break;
}

