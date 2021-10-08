// 'use strict'
// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// C O N V E R S I Ó N  V S  C O E R C I Ó N
console.group('%cC O N V E R S I Ó N  V S  C O E R C I Ó N', 'color:#ffd166; font-weight:bold');
console.log('%cLa coerción es implícita, mientras que la conversión puede ser implícita o explícita.', 'color:#06d6a0');



// Coerción - - - >
console.log('\n\n%cCoerción', 'color:#ef476f');

// Coerción a string (operador concatenación)
console.log('\n   %cCoerción a string (operador concatenación)', 'color:#118ab2');
let result;

console.log('       %cString + number', 'color:#06d6a0');
result = '3' + 2;
console.log('       \'3\' + 2:', { result });

console.log('       %cString + boolean', 'color:#06d6a0');
result = '3' + true;
console.log('       \'3\' + true:', { result });

console.log('       %cString + bigint', 'color:#06d6a0');
result = '3' + 46n;
console.log('       \'3\' + 46n:', { result });

console.log('       %cString + undefined', 'color:#06d6a0');
result = '3' + undefined;
console.log('       \'3\' + undefined:', { result });

console.log('       %cString + null', 'color:#06d6a0');
result = '3' + null;
console.log('       \'3\' + null:', { result });

console.log('       %cString + Infinity', 'color:#06d6a0');
result = '3' + Infinity;
console.log('       \'3\' + Infinity:', { result });

console.log('       %cString + Object', 'color:#06d6a0');
result = '3' + { nombre: 'Fernando' };
console.log('       \'3\' + { nombre: \'Fernando\' }:', { result });

console.log('       %cString + array', 'color:#06d6a0');
result = '3' + [12, 4, 6];
console.log('       \'3\' + [12, 4, 6]:', { result });

// Coerción a number (operadores aritméticos)
console.log('\n   %cCoerción a number (operadores aritméticos)', 'color:#118ab2');
console.log('       %cString - number', 'color:#06d6a0');
result = '4' - 2;
console.log('       \'4\' - 2:', { result });

console.log('       %cString * String', 'color:#06d6a0');
result = '4' * '2';
console.log('       \'4\' * \'2\':', { result });

console.log('       %cString * String', 'color:#06d6a0');
result = '4' * '2f';
console.log('       \'4\' * \'2f\':', { result });

console.log('       %cString * boolean', 'color:#06d6a0');
result = '4' * true;
console.log('       \'4\' * true:', { result });

console.log('       %cString * boolean', 'color:#06d6a0');
result = '4' * false;
console.log('       \'4\' * false:', { result });

console.log('       %cString * null', 'color:#06d6a0');
result = '4' * null;
console.log('       \'4\' * null:', { result });

console.log('       %cString * undefined', 'color:#06d6a0');
result = '4' * undefined;
console.log('       \'4\' * undefined:', { result });

console.log('       %cString * infinity', 'color:#06d6a0');
result = '4' * Infinity;
console.log('       \'4\' * Infinity:', { result });

console.log('       %cString * array', 'color:#06d6a0');
result = '4' * [3, 7, 10];
console.log('       \'4\' * [3, 7, 10]:', { result });

console.log('       %cArray * array (un único valor)', 'color:#06d6a0');
result = [2] * [3];
console.log('       [2] * [3]:', { result });

console.log('       %cString * object', 'color:#06d6a0');
result = '4' * { nombre: 'Fernando' };
console.log('       \'4\' * { nombre: \'Fernando\' }:', { result });

// Coerción a number (operadores comparación)
console.log('\n   %cCoerción a number (operadores comparación)', 'color:#118ab2');
console.log('       %cString == string (no se aplica coerción, se compara su código ASCII)', 'color:#06d6a0');
result = '4' == '4';
console.log('       \'4\' == \'4\'', { result });

console.log('       %cString == number (coerción string a number)', 'color:#06d6a0');
result = '2n' == 2n;
console.log('       \'2n\' == 2n', { result });

console.log('       %cBoolean == number (coerción boolean a number)', 'color:#06d6a0');
result = true == 1;
console.log('       true == 1', { result });

console.log('       %cBoolean > string (coercion boolean a number + string a number)', 'color:#06d6a0');
result = false == '';
console.log('       false == \'\'', { result });

console.log('       %cBoolean > string (coercion boolean a number + string a number)', 'color:#06d6a0');
result = true == '13';
console.log('       true == \'13\'', { result });

console.log('       %cString != string (no se aplica coerción)', 'color:#06d6a0');
result = '34' != '34';
console.log('       \'34\' != \'34\'', { result });

console.log('       %cString != number (coerción string a number)', 'color:#06d6a0');
result = '9' != 9;
console.log('       \'9\' != 9', { result });

console.log('       %cString != number (coerción string a number)', 'color:#06d6a0');
result = '' != 0;
console.log('       \'\' != 0', { result });

console.log('       %cBoolean != string (coerción string a number)', 'color:#06d6a0');
result = false != 'false';
console.log('       false != \'false\'', { result });

console.log('       %cString > number (coerción string a number)', 'color:#06d6a0');
result = '14' > 16;
console.log('       \'14\' > 16', { result });

console.log('       %cNumber > string (coercion string a number)', 'color:#06d6a0');
result = 3 > '.';
console.log('       3 > \'.\'', { result });

console.log('       %cString < string (no se aplica coerción, se comparan su código ASCII)', 'color:#06d6a0');
result = '12' < '15';
console.log('       \'12\' < \'15\'', { result });

console.log('       %cBoolean <= string (coercion boolean a number + string a number)', 'color:#06d6a0');
result = false <= 'Hellow';
console.log('       false <= \'Hellow\'', { result });

console.log('       %cBoolean == null (coercion valores negativos)', 'color:#06d6a0');
result = false == null;
console.log('       false == null', { result });

console.log('       %cString == null (coercion valores negativos)', 'color:#06d6a0');
result = '' == null;
console.log('       \'\' == null', { result });

console.log('       %cNumber == null (coercion valores negativos)', 'color:#06d6a0');
result = 0 == null;
console.log('       0 == null', { result });

// Coerción a boolean (operadores lógicos)
console.log('\n   %cCoerción a boolean (operadores lógicos)', 'color:#118ab2');
console.log('       %cCadena vacía', 'color:#06d6a0');
result = '' || null;
console.log('       \'\' || null', { result });

console.log('       %cCadena', 'color:#06d6a0');
result = 'Hello' || null;
console.log('       \'\' || null', { result });

console.log('       %cNúmero positivo', 'color:#06d6a0');
result = 12 || null;
console.log('       12 || null', { result });

console.log('       %cNúmero negativo', 'color:#06d6a0');
result = -3 || null;
console.log('       -3 || null', { result });

console.log('       %cNúmero neutro', 'color:#06d6a0');
result = 0 || null;
console.log('       0 || null', { result });

console.log('       %cNull', 'color:#06d6a0');
result = null || 'other value';
console.log('       null || \'other value\'', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = undefined || null;
console.log('       undefined || null', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = Infinity || null;
console.log('       Infinity || null', { result });

console.log('       %cArray', 'color:#06d6a0');
result = [2, 5, 8] || null;
console.log('       [2, 5, 8] || null', { result });

console.log('       %cObject', 'color:#06d6a0');
result = { nombre: 'Fernando' } || null;
console.log('       { nombre: \'Fernando\' } || null', { result });



// Conversión explícita- - - >
console.log('\n\n%cConversión explícita', 'color:#ef476f');

// Conversión toString()
console.log('\n   %cConversion toString()', 'color:#118ab2');

console.log('       %cNumber', 'color:#06d6a0');
result = (21).toString();
console.log('       (21).toString():', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = 43857n.toString();
console.log('       43857n.toString():', { result });

console.log('       %cString', 'color:#06d6a0');
result = 'hello world'.toString();
console.log('       \'hello world\'.toString():', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = true.toString();
console.log('       true.toString():', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = false.toString();
console.log('       false.toString():', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = Infinity.toString();
console.log('       Infinity.toString():', { result });

console.log('       %cNull', 'color:#06d6a0');
// result = null.toString();
console.log('       null.toString(): %cUncaught TypeError: Cannot read property \'toString\' of null })', 'color:#EF476F');

console.log('       %cUndefined', 'color:#06d6a0');
// result = undefined.toString();
console.log('       undefined.toString(): %cUncaught TypeError: Cannot read property \'toString\' of undefined })', 'color:#EF476F');

console.log('       %cArray', 'color:#06d6a0');
result = [5, 94, 1].toString();
console.log('       [5, 94, 1].toString():', { result });

console.log('       %cObject', 'color:#06d6a0');
result = { nombre: 'Fernando' }.toString();
console.log('       { nombre: \'Fernando\' }.toString():', { result });

// Conversión String()
console.log('\n   %cConversion String()', 'color:#118ab2');

console.log('       %cNumber', 'color:#06d6a0');
result = String(21);
console.log('       String(21):', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = String(43857n);
console.log('       String(43857n):', { result });

console.log('       %cString', 'color:#06d6a0');
result = String('hello world');
console.log('       String(\'hello world\'):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = String(true);
console.log('       String(true):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = String(false);
console.log('       String(false):', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = String(Infinity);
console.log('       String(Infinity):', { result });

console.log('       %cNull', 'color:#06d6a0');
result = String(null);
console.log('       String(null):', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = String(undefined);
console.log('       String(undefined):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = String([5, 94, 1]);
console.log('       String([5, 94, 1]):', { result });

console.log('       %cObject', 'color:#06d6a0');
result = String({ nombre: 'Fernando' });
console.log('       String({ nombre: \'Fernando\' }):', { result });

// Conversión Number()
console.log('\n   %cConversion Number()', 'color:#118ab2');

console.log('       %cNumber', 'color:#06d6a0');
result = Number(21);
console.log('       Number(21):', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = Number(43857n);
console.log('       Number(43857n):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number('21');
console.log('       Number(\'21\'):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number('21fa');
console.log('       Number(\'21fa\'):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number('r21fa');
console.log('       Number(\'r21fa\'):', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = Number('hello world');
console.log('       Number(\'hello world\'):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = Number(true);
console.log('       Number(true):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = Number(false);
console.log('       Number(false):', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = Number(Infinity);
console.log('       Number(Infinity):', { result });

console.log('       %cNull', 'color:#06d6a0');
result = Number(null);
console.log('       Number(null):', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = Number(undefined);
console.log('       Number(undefined):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Number([]);
console.log('       Number([]):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Number([5]);
console.log('       Number([5]):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Number([5, 94, 1]);
console.log('       Number([5, 94, 1]):', { result });

console.log('       %cObject', 'color:#06d6a0');
result = Number({ nombre: 'Fernando' });
console.log('       Number({ nombre: \'Fernando\' }):', { result });

// Conversión Number.parseInt()
console.log('\n   %cConversión Number.parseInt()', 'color:#118ab2');

console.log('       %cNumber', 'color:#06d6a0');
result = Number.parseInt(21);
console.log('       Number.parseInt(21):', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = Number.parseInt(43857n);
console.log('       Number.parseInt(43857n):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number.parseInt('21');
console.log('       Number.parseInt(\'21\'):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number.parseInt('21fa');
console.log('       Number.parseInt(\'21fa\'):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number.parseInt('r21fa');
console.log('       Number.parseInt(\'r21fa\'):', { result });

console.log('       %cString', 'color:#06d6a0');
result = Number.parseInt('hello world');
console.log('       Number.parseInt(\'hello world\'):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = Number.parseInt(true);
console.log('       Number.parseInt(true):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = Number.parseInt(false);
console.log('       Number.parseInt(false):', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = Number.parseInt(Infinity);
console.log('       Number.parseInt(Infinity):', { result });

console.log('       %cNull', 'color:#06d6a0');
result = Number.parseInt(null);
console.log('       Number.parseInt(null):', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = Number.parseInt(undefined);
console.log('       Number.parseInt(undefined):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Number.parseInt([]);
console.log('       Number.parseInt([]):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Number.parseInt([5]);
console.log('       Number.parseInt([5]):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Number.parseInt([5, 94, 1]);
console.log('       Number.parseInt([5, 94, 1]):', { result });

console.log('       %cObject', 'color:#06d6a0');
result = Number.parseInt({ nombre: 'Fernando' });
console.log('       Number.parseInt({ nombre: \'Fernando\' }):', { result });

// Conversión operador suma ( + )
console.log('\n   %cConversión operador suma ( + )', 'color:#118ab2');

console.log('       %cNumber', 'color:#06d6a0');
result = +21;
console.log('       +21:', { result });

console.log('       %cBigInt', 'color:#06d6a0');
// result = +43857n;
console.log('       +43857n: %cUncaught TypeError: Cannot convert a BigInt value to a number', 'color:#EF476F');

console.log('       %cString', 'color:#06d6a0');
result = +'21';
console.log('       +\'21\':', { result });

console.log('       %cString', 'color:#06d6a0');
result = +'21fa';
console.log('       +\'21fa\':', { result });

console.log('       %cString', 'color:#06d6a0');
result = +'r21fa';
console.log('       +\'r21fa\':', { result });

console.log('       %cString', 'color:#06d6a0');
result = +'hello world';
console.log('       +\'hello world\':', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = +true;
console.log('       +true:', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = +false;
console.log('       +false:', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = +Infinity;
console.log('       +Infinity:', { result });

console.log('       %cNull', 'color:#06d6a0');
result = +null;
console.log('       +null:', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = +undefined;
console.log('       +undefined:', { result });

console.log('       %cArray', 'color:#06d6a0');
result = +[];
console.log('       +[]:', { result });

console.log('       %cArray', 'color:#06d6a0');
result = +[5];
console.log('       +[5]:', { result });

console.log('       %cArray', 'color:#06d6a0');
result = +[5, 94, 1];
console.log('       +[5, 94, 1]:', { result });

console.log('       %cObject', 'color:#06d6a0');
result = +{ nombre: 'Fernando' };
console.log('       +{ nombre: \'Fernando\' }:', { result });

// Conversión Boolean()
console.log('\n   %cConversión Boolean()', 'color:#118ab2');
console.log('       %cNumber', 'color:#06d6a0');
result = Boolean(21);
console.log('       Boolean(21):', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = Boolean(43857n);
console.log('       Boolean(43857n): %cUncaught TypeError: Cannot convert a BigInt value to a number', 'color:#EF476F');

console.log('       %cString', 'color:#06d6a0');
result = Boolean('hello world');
console.log('       Boolean(\'hello world\'):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = Boolean(true);
console.log('       Boolean(true):', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = Boolean(false);
console.log('       Boolean(false):', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = Boolean(Infinity);
console.log('       Boolean(Infinity):', { result });

console.log('       %cNull', 'color:#06d6a0');
result = Boolean(null);
console.log('       Boolean(null):', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = Boolean(undefined);
console.log('       Boolean(undefined):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Boolean([]);
console.log('       Boolean([]):', { result });

console.log('       %cArray', 'color:#06d6a0');
result = Boolean([5]);
console.log('       Boolean([5]):', { result });

console.log('       %cObject', 'color:#06d6a0');
result = Boolean({ nombre: 'Fernando' });
console.log('       Boolean({ nombre: \'Fernando\' }):', { result });

// Conversión !!
console.log('\n   %cConversión !!', 'color:#118ab2');
console.log('       %cNumber', 'color:#06d6a0');
result = !!21;
console.log('       !!21:', { result });

console.log('       %cBigInt', 'color:#06d6a0');
result = !!43857n;
console.log('       !!43857n: %cUncaught TypeError: Cannot convert a BigInt value to a number', 'color:#EF476F');

console.log('       %cString', 'color:#06d6a0');
result = !!'hello world';
console.log('       !!\'hello world\':', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = !!true;
console.log('       !!true:', { result });

console.log('       %cBoolean', 'color:#06d6a0');
result = !!false;
console.log('       !!false:', { result });

console.log('       %cInfinity', 'color:#06d6a0');
result = !!Infinity;
console.log('       !!Infinity:', { result });

console.log('       %cNull', 'color:#06d6a0');
result = !!null;
console.log('       !!null:', { result });

console.log('       %cUndefined', 'color:#06d6a0');
result = !!undefined;
console.log('       !!undefined:', { result });

console.log('       %cArray', 'color:#06d6a0');
result = !![];
console.log('       !![]:', { result });

console.log('       %cArray', 'color:#06d6a0');
result = !![5];
console.log('       !![5]:', { result });

console.log('       %cObject', 'color:#06d6a0');
result = !!{ nombre: 'Fernando' };
console.log('       !!{ nombre: \'Fernando\' }:', { result });

