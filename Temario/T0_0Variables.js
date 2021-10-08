// V A R I A B L E S
console.group("%cD E C L A R A C I Ó N  E  I N I C I A L I Z A C I Ó N  D E  V A R I A B L E S", "color:#ffd166; font-weight:bold");

// Declaración e inicialización en la misma línea.
console.log('   %cDeclarando + inicialización en la misma línea', 'color:#118ab2');
var firstName = "Fernando";
console.log('      ', { firstName });

// Declaración e inicialización en distintas líneas
console.log('   %cDeclarando + inicialización en distintas líneas', 'color:#118ab2');
var profession; // Declaración
profession = "Médico"; // Inicialización
console.log('      ', { profession });

console.groupEnd();

// E V A L U A C I Ó N  D E  V A R I A B L E S
// Descomente las líneas con el comentario -Error para mostrar el error de cada uno de los apartados.
console.group('%cE V A L U A C I Ó N  D E  V A R I A B L E S', 'color:#ffd166; font-weight:bold');
// console.log('   %cEvaluación variable no declarada', 'color:#118ab2');
// console.log(a); // Error

// console.log('   %cEvaluación variable no inicializada', 'color:#118ab2');
// var b;
// console.log('      ', { b });

// console.log('   %cEvaluación constante no inicializada', 'color:#118ab2');
// const CONSTANTE; // Error

// console.log('   %cEvaluación variable como null', 'color:#118ab2');
// var c = null;
// console.log('      ', { c });