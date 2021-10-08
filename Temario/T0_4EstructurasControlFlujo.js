// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// E S T R U C T U R A S  D E  C O N T R O L  D E  F L U J O
console.group('%cE S T R U C T U R A S  D E  C O N T R O L  D E  F L U J O', 'color:#ffd166; font-weight:bold');
console.log('%cConvierten programas de ejecución lineal en programas dinámicos.', 'color:#06d6a0');



// Condicionales - - - >
console.log('%c\n\nCondicionales', 'color:#ef476f');

// Estructura if
console.log('   %cEstructura if', 'color:#118ab2');
console.log('       %cCon la condición verdadera.', 'color:#06d6a0');
let age = 18;

if (age >= 18) {
    console.log('       El usuario es mayor de edad');
}

console.log('       %cCondición verdadera más falsa.', 'color:#06d6a0');
if (age >= 18) {
    console.log('       El usuario es mayor de edad');

} else {
    console.log('       El usuario es menor de edad');
}

console.log('       %cCondiciones anidadas.', 'color:#06d6a0');
let nota = 8;
if (nota >= 0 && nota < 5) {
    console.log('       Suspenso');

} else if (nota >= 5 && nota <= 7) {
    console.log('       Aprobado');
} else if (nota >= 7 && nota <= 9) {

    console.log('       Notable');
} else if (nota >= 9 && nota <= 10) {
    console.log('       Sobresaliente');
} else {
    console.log('       Nota incorrecta');
}

// Estructura switch
console.log('   %cEstructura switch', 'color:#118ab2');
console.log('       %cEl switch utiliza comparación extricta.', 'color:#06d6a0');
let num = 3;

switch (num) {
    case 1:
        console.log('       Uno');
        break;

    case 2:
        console.log('       Dos');
        break;

    case '3':
        console.log('       Tres');
        break;

    default:
        console.log('       Número no válido para su conversióna texto.');
        break;
}

console.log('       %cOperación única con múltiples casos.', 'color:#06d6a0');
let animal = 'Jirafa';

switch (animal) {
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Cerdo':
        console.log('       Este animal subirá al Arca de Noé.');
    case 'Dinosaurio':

    default:
        console.log('       Este animal no lo hará.');
        break;
}


// Iterativas - - - >
console.log('%c\n\nIterativas', 'color:#ef476f');

// Estructura for
console.log('   %cEstructura for', 'color:#118ab2');
console.log('       %cCrea un bucle el cual ejecuta unas sentencias un número determinado de veces.', 'color:#06d6a0');
for (let i = 0; i < 3; i++) {
    console.log('       ' + (i + 1) + 'º iteración: i = ' + i);
}

// Estructura while
console.log('   %cEstructura while', 'color:#118ab2');
console.log('       %cCrea un bucle el cual ejecuta unas sentencias un número indeterminado de veces.', 'color:#06d6a0');

let salir = function () {
    let optionUser = prompt('¿Quieres iniciar el juego?, Escribe -S para Si o -N para No');

    return optionUser.toUpperCase() == 'S' ? false :
        optionUser.toUpperCase() == 'N' ? true : false;
}();

console.log('       Estructura while ejecutándose');
while (!salir) {

    let optionUser = prompt('¿Quieres salir? \nEscribe -S para salir o -C para continuar');

    salir = optionUser.toUpperCase() == 'S' ? true :
        optionUser.toUpperCase() == 'C' ? false : function () {
            console.log('       No has introducido un valor válido');
            return false;
        }();
}

console.log('       Estructura while finalizada');

// Estructura do_while
console.log('   %cEstructura do_while', 'color:#118ab2');
console.log('       %cCrea un bucle el cual ejecuta unas sentencias un número indeterminado de veces. Se accede mínimo una vez.', 'color:#06d6a0');
salir = false;

console.log('       Estructura while ejecutándose');
do {

    let optionUser = prompt('¿Quieres salir? \nEscribe -S para salir o -C para continuar');

    salir = optionUser.toUpperCase() == 'S' ? true :
        optionUser.toUpperCase() == 'C' ? false : function () {
            console.log('       No has introducido un valor válido');
            return false;
        }();
} while (!salir);

console.log('       Estructura do_while finalizada');