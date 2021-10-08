// T I P O S  D E  D A T O S  P R I M I T I V O S
console.groupCollapsed(
    '%cT I P O S  D E  D A T O S  P R I M I T I V O S',
    'color:#ffd166; font-weight:bold'
);

console.log('   %cString', 'color:#118ab2');
var str = 'Pepe';
console.log('      ', { str });

console.log('   %cNumber', 'color:#118ab2');
var num = 20;
console.log('      ', { num });

console.log('   %cBoolean', 'color:#118ab2');
var bol = true;
console.log('      ', { bol });

console.log('   %cUndefined', 'color:#118ab2');
var und;
console.log('      ', { und });

console.log('   %cNull', 'color:#118ab2');
var nul = null;
console.log('      ', { nul });

console.groupEnd();

let num = BigInt(23);

// T I P O  D E  D A T O  O B J E T O
console.groupCollapsed(
    '%cT I P O  D E  D A T O  O B J E T O',
    'color:#ffd166; font-weight:bold'
);
console.log('   %cObject', 'color:#118ab2');
let obj = {}; // Declaración de un objeto vacío.

obj = {
    numero: 10, // Propiedad
    texto: 'Nuevo texto', // A la última propiedad del objetno no se le pone coma, por consorcio.

    objHijo: {
        numero2: 20,
        texto2: 'Nuevo texto 2',
    },
};

console.log('      ', { obj });

console.groupEnd();
