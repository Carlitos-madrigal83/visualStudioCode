// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// PASO DATO POR VALOR
console.group('%c P A S O  P O R  V A L O R  Y  R E F E R E N C I A', 'color:#ffd166; font-weight:bold');
console.log('%cLos tipos de datos primitivos se pasan por valor y los tipo object por referencia.', 'color:#06d6a0');



// Paso por valor (datos primitivos) - - - >
console.log('\n\n%cPaso por valor (datos primitivos)', 'color:#ef476f');

let a = 10;
let b = a;

console.log('      ', { a });
console.log('      ', { b });

a = 20;

console.log('      ', { a });
console.log('      ', { b });



// Paso por referencia (datos object) - - - >
console.log('\n\n%cPaso por valor (datos object)', 'color:#ef476f');

let c = {
    nombre: 'Juan'
}
// c, tiene como valor la dirección de memoria: 0x001

let d = c; // d, guarda como valor la dirección de memoria que tiene c: 0x001
console.log('       c:', c);
console.log('       d:', d);

c.nombre = 'Maria'; // desde la variable c, cambiamos el valor de la propiedad -nombre del objeto

d.colorPared = 'Rosa';

console.log('       c:', c);
console.log('       d:', d);