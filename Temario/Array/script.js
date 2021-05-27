// ARREGLOS
console.group('%cA R R E G L O S', 'color:#118ab2; font-weight:bold');
console.log('%cLos arreglos en JavaScript son una colección de datos', 'color:#06d6a0');

let arr1 = new Array('manzana', 'naranjas', 'uvas'); // Utilizando el constructor con el operador new.
let arr2 = [4, 6, 8, 10, 9, 2]; // Forma simplificada
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = [

    true,
    {
        nombre: 'Paula',
        apellido: 'Hernandez'
    },
    function () {
        console.log('    arr4[2](): Soy una función y ocupo la posición 2 del array ');
    },
    function miFuncion(persona) {
        console.log('    arr4[3](arr4[1]): ' + persona.nombre + ' ' + persona.apellido);
    },
    [
        'Bicicleta',
        'Avion',
        'Moto',
        'Coche',
        [
            'km',
            'millas',
            'pies',
            function () {
                console.log('    this: ', this);
            }
        ]
    ]
];

console.log('    %cForma con el new', 'color:#118ab2');
console.log('   ', arr1);

console.log('    %cForma simplificada', 'color:#118ab2');
console.log('   ', arr2);

console.log('    %cEl primer índice es 0', 'color:#118ab2');
console.log('    arr2[0]:', arr2[0]);

// Acceder a la última posición de un array
console.log('    %cEl último índice es n - 1', 'color:#118ab2');
console.log('    arr2[arr2.length - 1]:', arr2[arr2.length - 1]);

// Accediendo a un posición no existente
console.log('    %cEl último índice es n - 1', 'color:#118ab2');
console.log('    arr2[6]:', arr2[6]);

// Los array pueden contener datos de cualquier tipo
console.log('    %cArray de diferentes tipos de datos', 'color:#118ab2');
console.log('    arr4:', arr4);
console.log('    arr4[0]:', arr4[0]);
console.log('    arr4[1].nombre + \' \' + arr4[1].apellido:', arr4[1].nombre + ' ' + arr4[1].apellido);
arr4[2]();
arr4[3](arr4[1]);
arr4[4][4][3]();


// Funciones de arreglos
console.log('%cFunciones de arreglos', 'color:#06d6a0');

console.log('    %cReverse()', 'color:#118ab2');
console.log('    arr3.reverse()', arr3.reverse());
arr3.reverse();

/* AGREGAR MAP CUANDO LO VEAMOS */
console.log('    %cJoin()', 'color:#118ab2');
arr3 = arr3.join(); // entre parentesis se agrega el elemento separador
console.log('    arr3.join()', arr3);

console.log('    %cSplit()', 'color:#118ab2');
arr3 = arr3.split(',');
console.log('    arr3.Split()', arr3);

console.log('    %cToString()', 'color:#118ab2');
console.log('    arr3.toString()', arr3.toString());

console.log('    %cPush()', 'color:#118ab2');
let posicion = arr3.push('7');
console.log('    arr3.push(\'7\')', arr3);
console.log('    posicion:', posicion);

console.log('    %cjUnshift()', 'color:#118ab2');
let posicion2 = arr3.unshift('0');
console.log('    arr3.unshift(\'0\')', arr3);
console.log('    posicion2:', posicion2);

console.log('    %cPop()', 'color:#118ab2');
let valorEliminado1 = arr3.pop();
console.log('    arr3.pop()', arr3);
console.log('    valorEliminado1:', valorEliminado1);

console.log('    %cSplice()', 'color:#118ab2');
let valorEliminado2 = arr3.splice(4, 1, 5, 8);
console.log('    arr3.splice(1, 3, 10, 20, 30)', arr3);
console.log('    valorEliminado1:', valorEliminado2);

console.log('    %cSlice()', 'color:#118ab2');
let rangoValores = arr3.slice(4, 6);
console.log('    arr3.slice(1, 3)', arr3);
console.log('    rangoValores:', rangoValores);
