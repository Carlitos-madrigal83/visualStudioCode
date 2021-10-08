// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// H O I S T I N G
console.group('%cH O I S T I N G', 'color:#ffd166; font-weight:bold');
console.log('%cAsignación de declaraciones de variables en memoria durante la fase de compilación.', 'color:#06d6a0');



// Elevación con variables - - - >
console.log('%c\n\nElevación con variables', 'color:#ef476f');
console.log('   %cHoisting con var.', 'color:#118ab2');
console.log('       %cAcceder a una varaible antes de su inicialización, por defecto devuelve undefined.', 'color:#06d6a0');
var x = 1;
console.log('       ' + x + " " + y);
var y = 2;

console.log('       %cLas variables globales no les afecta el hoisting.', 'color:#06d6a0');
// console.log('      ', { num1 });
num1 = 5;

console.log('       %cComportamiento con variables globales en combinación con var.', 'color:#06d6a0');
num2 = 12;
var num2;
console.log('      ', { num2 });



// Elevación con funciones - - - >
console.log('%c\n\nElevación con funciones', 'color:#ef476f');
console.log('   %cHoisting con function.', 'color:#118ab2');
console.log('       %cAcceder a una varaible antes de su inicialización, por defecto devuelve undefined.', 'color:#06d6a0');
myFunction();

function myFunction() {
    console.log('       Ejecutando función myFunction');
}
