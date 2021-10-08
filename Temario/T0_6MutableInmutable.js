// 'use strict'
// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// I N M U T A B L E
console.group('%cI N M U T A B L E', 'color:#ffd166; font-weight:bold');
console.log('%cEl valor no puede ser cambiado en la dirección de memoria después de ser definido.', 'color:#06d6a0');



// Ejemplos inmutbilidad - - - >
console.log('%c\n\nEjemplo inmutbilidad', 'color:#ef476f');
console.log('   %cEjemplo 1', 'color:#118ab2');
let c = '       Inmutable';
console.log(c);
c[0] = 'i';
console.log(c);
console.log('   %cEjemplo 2', 'color:#118ab2');
let e = '       Hello ';
let f = e + 'world';
console.log(e);
console.log(f);



// Ejemplos mutabilidad - - - >
console.log('%c\n\nEjemplo mutabilidad', 'color:#ef476f');
console.log('   %cEjemplo 1', 'color:#118ab2');
let a = {
    nombre: 'Alejandro',
    id: 'f-7469'
}
let b = a;

b.nombre = 'Marta';
console.log('      ', { a });
console.log('      ', { b });



