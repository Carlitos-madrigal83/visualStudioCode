// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// A R R E G L O S
console.group('%c A R R E G L O S', 'color:#ffd166; font-weight:bold');
console.log(
  '%cLos arreglos en JavaScript son una colección de objetos',
  'color:#06d6a0'
);

// Creando y manejando arrays - - - >
console.log('\n\n%cCreando y manejando arrays', 'color:#ef476f');

let arr1 = new Array('manzanas', 'naranjas', 'uvas'); // Forma utilizando la palabra reservada new.
let arr2 = [3, 4, 5, 6, 1]; // Forma simplificada.
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = [
  true,
  {
    nombre: 'Paula',
    apellido: 'Hernandez',
  },
  function () {
    console.log(
      '       arr4[2](): Soy una función y ocupo la posición 2 del array'
    );
  },
  function (persona) {
    console.log(
      '       arr4[3](arr4[1]): ' + persona.nombre + ' ' + persona.apellido
    );
  },
  [
    'Bicicleta',
    'Avión',
    'Moto',
    'Coche',
    [
      'km',
      'millas',
      'pies',
      function () {
        console.log('       this:', this);
      },
    ],
  ],
];

// Creando un array con new
console.log('\n   %cCreando un array con new', 'color:#118ab2');
console.log("       new Array('manzanas', 'naranjas', 'uvas')", { arr1 });

// Forma simplificada
console.log('\n   %cForma simplificada', 'color:#118ab2');
console.log('       [3, 4, 5, 6, 1]', { arr2 });

// Acceder a un elemento de Array mediante su índice
console.log(
  '\n   %cAcceder a un elemento de Array mediante su índice',
  'color:#118ab2'
);
let firstValue = arr1[0];
let lastValue = arr1[arr1.length - 1];
console.log('       arr1[0]:', { firstValue });
console.log('       arr1[arr1.length - 1]:', { lastValue });

// Accediendo a posiciones sin valor
console.log('\n   %cAccediendo a posiciones sin valor', 'color:#118ab2');
console.log('       arr2[5]:', arr2[5]);

// Array de diferentes tipos de datos
console.log('\n   %cArray de diferentes tipos de datos', 'color:#118ab2');
console.log('       arr4:', arr4);
console.log('       arr4[0]:', arr4[0]);
console.log(
  "       arr4[1].nombre + ' ' + arr4[1].apellido:",
  arr4[1].nombre + ' ' + arr4[1].apellido
);
arr4[2]();
arr4[3](arr4[1]);
arr4[4][4][3]();

// Métodos de arreglos - - - >
console.log('\n\n%cMétodos de arreglos', 'color:#ef476f');

console.log('\n   %c● Reverse()', 'color:#118ab2');
console.log('       %cLe da la vuelta al array', 'color:#06d6a0');
console.log('       arr3.reverse()', arr3.reverse());
arr3.reverse();

console.log('\n   %c○ Map()', 'color:#118ab2');
arr3 = arr3.map(function (element) {
  // Calcula el cuadrado de cada número.
  element *= element;
  return element;
});

console.log('      ', arr3);

arr3 = arr3.map(Math.sqrt); // Calculando raiz cuadrada.
console.log('      ', arr3);

console.log('\n   %c○ Join()', 'color:#118ab2');
console.log(
  '       %cUne todos los elementos del array por un separador.',
  'color:#06d6a0'
);
arr3 = arr3.join();
console.log('       arr3.join():', arr3);

console.log('\n   %c○ Split()', 'color:#118ab2');
console.log(
  '       %cSepara elementos de una cadena utilizando un separador.',
  'color:#06d6a0'
);
arr3 = arr3.split(',');
console.log("       arr3.split(','):", arr3);

console.log('\n   %c○ ToString()', 'color:#118ab2');
console.log(
  '       %cGenera una cadena con datos del array, sin poder aplicar un separador.',
  'color:#06d6a0'
);

console.log('       arr3.toString():', arr3.toString());
console.log('       arr3:', arr3);

console.log('\n   %c● Push()', 'color:#118ab2');
console.log(
  '       %cAgrega un nuevo elemento por el final al array devolviendo la nueva longitud',
  'color:#06d6a0'
);
let newLongArray = arr3.push('7');
console.log("       arr3.push('7'):", arr3);
console.log('       newLongArray:', newLongArray);

console.log('\n   %c● Unshift()', 'color:#118ab2');
console.log(
  '       %cAgrega un nuevo elemento por el principio al array devolviendo la nueva longitud',
  'color:#06d6a0'
);
let newLongArray2 = arr3.unshift('0');
console.log("       arr3.unshift('0'):", arr3);
console.log('       newLongArray2:', newLongArray2);

console.log('\n   %c● Pop()', 'color:#118ab2');
console.log(
  '       %cElimina un elemento por el final devolviendo el elemento eliminado',
  'color:#06d6a0'
);
let valueRemove = arr3.pop();
console.log('       arr3.pop():', arr3);
console.log('       valueRemove: ' + valueRemove);

console.log('\n   %c● Shift()', 'color:#118ab2');
console.log(
  '       %cElimina un elemento por el inicio devolviendo el elemento eliminado',
  'color:#06d6a0'
);
let valorEliminado2 = arr3.shift();
console.log('       arr3.shift():', arr3);
console.log('       valorEliminado: ' + valorEliminado2);

console.log('\n   %c● Splice()', 'color:#118ab2');
console.log(
  '       %cElimina rango de valores, pudieno reemplazarlos por unos nuevos y devolviendo en un array los valores eliminados. splice(índice, numeroElementosEliminar)',
  'color:#06d6a0'
);
let valorEliminado3 = arr3.splice(1, 3, 10, 20, 30);
console.log('       arr3.splice(1, 3, 10, 20, 30):', arr3);
console.log('       valorEliminado2: ' + valorEliminado3);

console.log('\n   %c○ Slice()', 'color:#118ab2');
console.log(
  '       %cDevuelve un rango de valores del array original. slice(índice, numeroElementosCapturar)',
  'color:#06d6a0'
);
console.log('       arr3.slice(1, 3):', arr3.slice(1, 3));
console.log('       arr3:', arr3);

console.log('\n   %c○ Concat()', 'color:#118ab2');
console.log('       %cFusiona dos o más arrays en uno nuevo', 'color:#06d6a0');
console.log('       arr3.concat(arr2):', arr3.concat(arr2));

// Operaciones con arrays
console.log('%c\n\nOperaciones con arrays', 'color:#ef476f');

console.log(
  '\n   %cEliminar un único elemento mediante su posición()',
  'color:#118ab2'
);
console.log('       arr3:', arr3);
let pos = 1;
arr3.splice(pos, 1);
console.log('       arr3.splice(pos, 1):', arr3);

console.log('\n   %cCopiar un array', 'color:#118ab2');
console.log('       arr3:', arr3);
let arrayCopy = arr3.slice();
console.log('       arr3.slice():', arrayCopy);
arrayCopy[0] = 300;
console.log('       arrayCopy:', arrayCopy);
console.log('       arr3:', arr3);

console.log(
  '\n   %cVaciando un array mediante la propiedad length',
  'color:#118ab2'
);
console.log('       arrayCopy', arrayCopy);
arrayCopy.length = 0;
console.log('       arrayCopy.length = 0', arrayCopy);

console.log(
  '\n   %cAñadiendo valor en índice fuera de límites en el array',
  'color:#118ab2'
);
const frutas = ['banana', 'manzana', 'pera'];
console.log('      ', { frutas });
frutas[5] = 'naranaja';
console.log('      ', { frutas });

let obj = {
  firstName: 'Jose',
  addElem: function (elem) {
    console.log('       this:', this);
    [].push.call(this, elem);

    (function autoEjecutada() {
      console.log('       Window: ', this);
    })();
  },
};

obj.addElem(1);
obj.addElem(2);
console.log('      ', obj);

const numeros = [4, 2, 5, 1, 3];
console.log(numeros.sort((a, b) => -(a - b)));

const personas = [
  { name: 'Jose', age: 25 },
  { name: 'Luisa', age: 23 },
  { name: 'Marta', age: 35 },
  { name: 'Carlos', age: 24 },
  { name: 'Ángel', age: 61 },
];

personas.sort((a, b) => -(a.age - b.age));
console.log({ personas });
