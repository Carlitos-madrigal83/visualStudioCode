// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// F U N C I O N E S
console.group('%cF U N C I O N E S', 'color:#ffd166; font-weight:bold');
// Las funciones son objetos de primera clase en JavaScript



// Manejo de funciones - - - >
console.log('%c\n\nManejo de funciones', 'color:#ef476f');
console.log('   %cDefinir funciones', 'color:#118ab2');
console.log('       %cDefinición de función, también denominada delcaración de función o expresión de función.', 'color:#06d6a0');
function square(number) {
    return number * number;
}

// Llamada a funciones
console.log('   %cLlamada a funciones', 'color:#118ab2');
console.log('       %cLa llamada a función lleva a cabo las acciones especificadas con los parámetros indicados.', 'color:#06d6a0');
console.log('       %cLos parámetros en la llamada a una función son los argumentos de la función.', 'color:#06d6a0');
console.log('       square(5):', square(5));

// Hoisting
console.log('   %cHoisting', 'color:#118ab2');
console.log('       %cHoisting de función, solo funciona con declaraciones de función, no con expresiones de función.', 'color:#06d6a0');
console.log('       square2(3):', square2(3));
function square2(number) {
    return number * number;
}

// Parámetros, en la llamada a una función son los argumentos de la función
console.log('   %cParámetros', 'color:#118ab2');
console.log('       %cLos parámetros en la llamada a una función son los argumentos de la función.', 'color:#06d6a0');
function myFunc(theObject) {
    theObject.make = 'Toyota';
}

let myCar = { make: 'Honda', model: 'Arcord', year: 1998 };
let x, y;

console.log('       myCar:', myCar);

x = myCar.make;
console.log('      ', { x });

myFunc(myCar);
console.log('       myCar:', myCar);

y = myCar.make;
console.log('      ', { y });

// Parámetros predeterminados
console.log('   %cParámetros predeterminados', 'color:#118ab2');
console.log('       %cForma antigua de generar un valor predeterminado.', 'color:#06d6a0');
function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1;

    return a * b;
}

console.log('       multiply(5):  ', multiply(5));

console.log('       %cForma nueva aplicada a partir de ECMAScript 2015.', 'color:#06d6a0');
function multiply2(a, b = 1) {
    return a * b;
}
console.log('       multiply2(4): ', multiply2(4));

// Parámetros rest
console.log('   %cParámetros rest', 'color:#118ab2');
console.log('       %cLa sintaxis del parámetro rest nos permite representar un número indefinido de argumentos como un arreglo.', 'color:#06d6a0');
function multiply3(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}
console.log('       multiply3(2, 1, 2, 3): ', multiply3(2, 1, 2, 3));

// Devolución de datos (return)
console.log('   %cDevolución de datos (return)', 'color:#118ab2');
console.log('       %cUna función siempre devuelve un valor, el valor por defecto es -undefined.', 'color:#06d6a0');
function myFunc2() { }
console.log('       myFunc2:', myFunc2());


// Ámbito de función
console.log('   %cÁmbito de función', 'color:#118ab2');
console.log('       %cUna función forma su propio ambito local.', 'color:#06d6a0');
console.log('       %cUna función interna puede acceder a todas las variables de la función externa.', 'color:#06d6a0');
let num1 = 20,
    num2 = 3,
    firstName = 'Chamahk';

function multiply4() {
    return num1 * num2;
}

console.log('       multiply4():', multiply4());

function getScore() {
    let num1 = 2,
        num2 = 3;

    function add() {
        return firstName + ' anotó ' + (num1 + num2);
    }

    return add();
}

console.log('       getScore():', getScore());

// Funciones anidadas y cierres
console.log('   %cFunciones anidadas y cierres', 'color:#118ab2');
console.log('       %cEjemplo de función externa más interna.', 'color:#06d6a0');
let pet = function (firstName) {
    let getName = function () {
        return firstName;
    }

    return getName;
}

myPet = pet('Vivie');

console.log('       myPet():', myPet());
console.log('       operationSubSection:', 20);

console.log('       %cEjemplo de manipulación de variables internas de la función externa, mediante métodos de un objeto', 'color:#06d6a0');

let createPet = function (firstName) {

    let sex;

    return {

        setFirstName: function (newName) {
            firstName = newName;
        },

        getFirstName: function () {
            return firstName;
        },

        getSex: function () {
            return sex;
        },

        setSex: function (newSex) {
            if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
                sex = newSex;
            }
        }
    }
}

let pet2 = createPet('Vivie');

console.log('       pet2:', pet2);
console.log('       pet2.getFirstName():', pet2.getFirstName());
console.log('       pet2.getSex():', pet2.getSex());

pet2.setFirstName('Oliver');
pet2.setSex('male');

console.log('       pet2.getSex():', pet2.getSex());
console.log('       pet2.getFirstName():', pet2.getFirstName());

console.log('       %cEncapsulando función para bloquear modificaciones externas.', 'color:#06d6a0');
let getCode = (function () {
    let apiCode = '0]Eal(eh&2';

    return function () {
        return apiCode;
    }
}());

console.log('       getCode():', getCode());

console.log('       %cVariable interna anula a variable externa si tienen el mismo nombre.', 'color:#06d6a0');
let createPet2 = function (firstName) {
    return {
        setName: function (firstName) {
            firstName = firstName;
        }
    }
}

console.log('       createPet2(\'Marta\').setName():', createPet2('Marta').setName());

console.log('       %cFunciones anidadas.', 'color:#06d6a0');
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}

a = addSquares(2, 3);
b = addSquares(3, 4);
c = addSquares(4, 5);

console.log('      ', { a });
console.log('      ', { b });
console.log('      ', { c });

// Preservación de variables
console.log('   %cPreservación de variables', 'color:#118ab2');
console.log('       %cLa memoria será liberada solo y cuando el inside devuelto ya no sea accesible.', 'color:#06d6a0');
function outside(x) {

    return function (y) {
        return x + y;
    }

    return inside;
}

fn_inside = outside(3);
result = fn_inside(5);
result1 = outside(3)(5);

console.log('      ', { result });
console.log('      ', { result1 });

// Conflictos de nombres
console.log('   %cConflictos de nombres', 'color:#118ab2');
console.log('       %cCuando dos argumentos o variables en el ámbito de un cierre tienen el mismo nombre, hay un conflicto de nombres.', 'color:#06d6a0');
function outside() {
    var x = 5;

    function inside(x) {
        return x * 2;
    }

    return inside;
}

console.log('       outside()(10):', outside()(10));

// Función de primera clase
console.log('   %cFunción de primera clase', 'color:#118ab2');
console.log('       %cUna función es considerada de primera clase cuando puede ser tratada como cualquier otra variable.', 'color:#06d6a0');

const foo = function () {
    console.log('foobar');
}

console.log('      ', { foo });

console.log('       %cFunción pasada como parámetro.', 'color:#06d6a0');
function diHola() {
    return 'Hola';
}

function saludar(saludo, nombre) {
    return saludo() + nombre;
}

console.log('       saludar(diHola, \'JavaScript!\'):', saludar(diHola, 'JavaScript!'));

console.log('       %cDevolución de función.', 'color:#06d6a0');
function diHola2() {

    return function () {
        return '¡Hola!';
    }
}

const miFuncion = diHola2();
console.log('       miFuncion():', miFuncion());
console.log('       diHola2()():', diHola2()());


// Función anonima
console.log('   %cFunción anónima', 'color:#118ab2');
console.log('       %cUna función anónima es aquella que no lleva un nombre asignado para poder hacer referencia a ella.', 'color:#06d6a0');
const foo2 = function () {
    console.log('foobar');
}

// Expresiones function
console.log('   %cExpresiones function', 'color:#118ab2');
console.log('       %cLas epxresiones function son convenientes cuando se pasa una función como argumento a otra función.', 'color:#06d6a0');
function map(f, a) {

    let result = [];
    let i;
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const f = function (x) {
    return x * x * x;
}

let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);

console.log('       cube:', cube);

const imprimirNombre = function (nombre) {
    console.log(nombre);
}

// Proteger función con const
console.log('   %cProteger función con const', 'color:#118ab2');
console.log('       %cPara proteger una función hay que hacer uso de una expresión function almacenándola en una constante.', 'color:#06d6a0');

const square3 = function (number) { return number * number };

console.log('       const square3 = function (number) { return number * number };');

// Usar el objeto arguments
console.log('   %cUsar el objeto arguments', 'color:#118ab2');
console.log('       %cArguments es un objeto similar a Array accesible dentro de funciones que contiene los valores de los argumentos pasados a esa función.', 'color:#06d6a0');



// Propiedades - - - >
console.log('%c\n\nPropiedades', 'color:#ef476f');
console.log('   %cArguments', 'color:#118ab2');

// Capturando argumentos en una función
console.log('       %cCapturando argumentos en una función.', 'color:#06d6a0');
function miFunc2(a, b, c) {
    console.log('       arguments:', arguments);

    for (let i = 0; i < arguments.length; i++) {
        console.log('       arguments[i]:', arguments[i]);
    }
}

miFunc2(2, 5, 7, 8);

// Establecer o reasignar cada argumento
console.log('       %cEstablecer o reasignar cada argumento.', 'color:#06d6a0');
function miFunc3(a, b, c) {
    console.log('       arguments:', arguments);

    arguments[0] = 12;
    arguments[1] = 3;
    arguments[2] = 7;

    for (let i = 0; i < miFunc3.length; i++) {
        console.log('       arguments[i]:', arguments[i]);
    }
}

miFunc3();

// Convirtiendo arguments en un array real
console.log('       %cConvirtiendo arguments en un array real (Array.prototype.slice.call(arguments)).', 'color:#06d6a0');
function miFunc4(a, b, c) {
    console.log('       arguments:', arguments);

    let args = Array.prototype.slice.call(arguments);

    console.log('       args:', args);
}

miFunc4(9, 7, 6);

// Convirtiendo arguments en un array real ((new Array()).slice.call(arguments))
console.log('       %cConvirtiendo arguments en un array real ((new Array()).slice.call(arguments)).', 'color:#06d6a0');
function miFunc5(a, b, c) {
    console.log('       arguments:', arguments);

    let args = (new Array()).slice.call(arguments);

    console.log('       args:', args);
}

miFunc5(4, 2, 1);


// Convirtiendo arguments en un array real ([].slice.call(arguments))
console.log('       %cConvirtiendo arguments en un array real ([].slice.call(arguments)).', 'color:#06d6a0');
function miFunc6(a, b, c) {
    console.log('       arguments:', arguments);

    let args = [].slice.call(arguments);

    console.log('       args:', args);
}

miFunc6(12, 69, 31);

// Convirtiendo arguments en un array real (Array.from(arguments))
console.log('       %cConvirtiendo arguments en un array real (Array.from(arguments)).', 'color:#06d6a0');
function miFunc7(a, b, c) {
    console.log('       arguments:', arguments);

    let args = Array.from(arguments);

    console.log('       args:', args);
}

miFunc7(8, 74, 125);

// Convirtiendo arguments en un array real ([...arguments])
console.log('       %cConvirtiendo arguments en un array real ([...arguments]).', 'color:#06d6a0');
function miFunc8(a, b, c) {
    console.log('       arguments:', arguments);

    let args = [...arguments];

    console.log('       args:', args);
}

miFunc8(16, 54, 15);

// Número de argumentos indefinidos
console.log('       %cNúmero de argumentos indefinidos.', 'color:#06d6a0');
function longestString() {
    let longest = '';

    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }

    return longest;
}

console.log('       longestString(\'casa\', \'perro\', \'rinoceronte\'):', longestString('casa', 'perro', 'rinoceronte'));

// Typeof con argumentos
console.log('       %cTypeof con argumentos.', 'color:#06d6a0');
function miFunc9() {
    console.log('       arguments:', arguments);

    console.log('       typeof arguments:', typeof arguments);
    console.log('       typeof arguments[0]:', typeof arguments[0]);
    console.log('       typeof arguments[1]:', typeof arguments[1]);
}

miFunc9(1, 'Madrid');