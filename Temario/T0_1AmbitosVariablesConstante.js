// Á M B I T O  +  D E C L A R A C I Ó N
console.group("%cÁ M B I T O  +  D E C L A R A C I Ó N", "color:#ffd166; font-weight:bold");

// Acceso a variables declaradas
console.log('       %cAcceso a variables declaradas.', 'color:#06d6a0');
console.log('      ', { town });
var town = 'Muelas del Pan';

var country = 'Spain';
console.log('      ', { country });

let flat = 'Street, Valencia 25';
console.log('      ', { flat });

// console.log('      ', { floor });
let floor = 10;
console.log('      ', { floor });

// Ámbito global
console.log('       %cÁmbito global.', 'color:#06d6a0');

{
   var a = 3;
   let b = 7;
}
console.log('      ', { a });
// console.log('      ', { b });

// Ámbito de función
console.log('       %cÁmbito función.', 'color:#06d6a0');

function function1(params) {

   var c = 3;
   let d = 7;

}

function1();

// console.log('      ', { c });
// console.log('      ', { d });


// Variable global en bloque de instrucción
console.log('       %cVariable global en bloque de instrucción.', 'color:#06d6a0');
function function2(params) {

   variableGlobal = 'Variable global';

}

function2();

console.log('      ', { variableGlobal });