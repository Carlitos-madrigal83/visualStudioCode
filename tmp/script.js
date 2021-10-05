let numUsuario = prompt("Indique un número");

if (Number.isNaN(+numUsuario) === false && +numUsuario % 2 === 0) {
    console.log("Usted ha señalado un numero par")
} else if (Number.isNaN(+numUsuario) === false) {
    console.log("El numero que ha indicado es impar")
} else {
    console.log("El dato introducido no es un número válido");
};


console.log(numUsuario);