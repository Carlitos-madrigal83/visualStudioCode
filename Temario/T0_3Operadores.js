// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// O P E R A D O R E S
console.group('%c O P E R A D O R E S', 'color:#ffd166; font-weight:bold');
console.log('%cLos operadores nos permiten realizar pruebas, hacer cálculos matemáticos, unir cadenas, etc.', 'color:#06d6a0');



// Operadores de asignación - - - >
console.log('%c\n\nOperadores de asignación', 'color:#ef476f');

// Operador de asignación simple
console.log('   %cOperador de asignación simple', 'color:#118ab2');
console.log('       %cUn operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.', 'color:#06d6a0');
let a = 12;
let b = 5;
console.log('       let a = 12:', { a });
console.log('       let b = 5: ', { b });

// Operador compuesto adición
console.log('   %cOperador compuesto adición', 'color:#118ab2');
console.log('       %cOperador perteneciente al grupo de operadores compuestos.', 'color:#06d6a0');
b += a;
console.log('       b += a:', { b });

// Operador compuesto resta
console.log('   %cOperador compuesto resta', 'color:#118ab2');
console.log('       %cOperador perteneciente al grupo de operadores compuestos.', 'color:#06d6a0');
b -= a;
console.log('       b -= a:', { b });

// Operador compuesto multiplicación
console.log('   %cOperador compuesto multiplicación', 'color:#118ab2');
console.log('       %cOperador perteneciente al grupo de operadores compuestos.', 'color:#06d6a0');
b *= a;
console.log('       b *= a:', { b });

// Operador compuesto división
console.log('   %cOperador compuesto división', 'color:#118ab2');
console.log('       %cOperador perteneciente al grupo de operadores compuestos.', 'color:#06d6a0');
b /= a;
console.log('       b /= a:', { b });

// Operador compuesto módulo
console.log('   %cOperador compuesto módulo', 'color:#118ab2');
console.log('       %cOperador perteneciente al grupo de operadores compuestos.', 'color:#06d6a0');
b = 26;
b %= a;
console.log('       b %= a:', { b });

// Operador compuesto exponenciación
console.log('   %cOperador compuesto exponenciación', 'color:#118ab2');
console.log('       %cOperador perteneciente al grupo de operadores compuestos.', 'color:#06d6a0');
b = 26;
b **= a;
console.log('       b **= a:', { b });



// Operadores de comparación - - - >
console.log('%c\n\nOperadores de comparación', 'color:#ef476f');

// Operador de igualdad
console.log('   %cOperador de igualdad', 'color:#118ab2');
console.log('       %cDevuelve true si los operandos son iguales.', 'color:#06d6a0');
let value1 = 35;
let value2 = '35';
console.log('       value1 == value2:', value1 == value2);

// Operador de desigualdad
console.log('   %cOperador de desigualdad', 'color:#118ab2');
console.log('       %cDevuelve true si los operandos no son iguales.', 'color:#06d6a0');
console.log('       value1 != value2:', value1 != value2);

// Operador de igualdad estricta
console.log('   %cOperador de igualdad estricta', 'color:#118ab2');
console.log('       %cDevuelve true si los operandos son iguales y del mismo tipo.', 'color:#06d6a0');
console.log('       value1 === value2:', value1 === value2);

// Operador de desigualdad estricta
console.log('   %cOperador de desigualdad estricta', 'color:#118ab2');
console.log('       %cDevuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.', 'color:#06d6a0');
console.log('       value1 !== value2:', value1 !== value2);

// Operador mayor que
console.log('   %cOperador mayor que', 'color:#118ab2');
console.log('       %cDevuelve true si el operando izquierdo es mayor que el operando derecho.', 'color:#06d6a0');
console.log('       value1 > value2:', value1 > value2);

// Operador mayor o igual que
console.log('   %cOperador mayor o igual que', 'color:#118ab2');
console.log('       %cDevuelve true si el operando izquierdo es mayor o igual que el operando derecho.', 'color:#06d6a0');
console.log('       value1 >= value2:', value1 >= value2);

// Operador menor que
console.log('   %cOperador menor que', 'color:#118ab2');
console.log('       %cDevuelve true si el operando izquierdo es menor que el operando derecho.', 'color:#06d6a0');
console.log('       value1 < value2:', value1 < value2);

// Operador menor o igual que
console.log('   %cOperador menor o igual que', 'color:#118ab2');
console.log('       %cDevuelve true si el operando izquierdo es menor o igual que el operando derecheo.', 'color:#06d6a0');
console.log('       value1 <= value2:', value1 <= value2);



// Operadores aritméticos - - - >
console.log('%c\n\nOperadores aritméticos', 'color:#ef476f');

// Operador suma
console.log('   %cOperador suma', 'color:#118ab2');
console.log('       %cDevuelve la suma de dos operandos.', 'color:#06d6a0');
let operand1 = 16;
let operand2 = 2;
console.log('       operand1 + operand2:', operand1 + operand2);

// Operador resta
console.log('   %cOperador resta', 'color:#118ab2');
console.log('       %cDevuelve la resta de dos operandos.', 'color:#06d6a0');
console.log('       operand1 - operand2:', operand1 - operand2);

// Operador multiplicación
console.log('   %cOperador multiplicación', 'color:#118ab2');
console.log('       %cDevuelve el producto de dos operandos.', 'color:#06d6a0');
console.log('       operand1 * operand2:', operand1 * operand2);

// Operador división
console.log('   %cOperador división', 'color:#118ab2');
console.log('       %cDevuelve el cociente de dos operandos.', 'color:#06d6a0');
console.log('       operand1 / operand2:', operand1 / operand2);

// Operador módulo
console.log('   %cOperador módulo', 'color:#118ab2');
console.log('       %cDevuelve el resto o residuo de dos operandos.', 'color:#06d6a0');
console.log('       operand1 % operand2:', operand1 % operand2);

// Operador prefijo incremento
console.log('   %cOperador prefijo incremento', 'color:#118ab2');
console.log('       %cOperador prefijo unario: incrementa en uno a su operando.', 'color:#06d6a0');
let operand3 = 5;
let operand4 = ++operand3;
console.log('       (++operand3), operand3:', operand3);
console.log('       (++operand3), operand4:', operand4);

// Operador sufijo incremento
console.log('   %cOperador sufijo incremento', 'color:#118ab2');
console.log('       %cOperador sufijo unario: incrementa en uno a su operando.', 'color:#06d6a0');
operand4 = operand3++;
console.log('       (operand3++), operand3:', operand3);
console.log('       (operand3++), operand4:', operand4);

// Operador prefijo decremento
console.log('   %cOperador prefijo decremento', 'color:#118ab2');
console.log('       %cOperador prefijo unario: decrementa en uno a su operando.', 'color:#06d6a0');
operand4 = --operand3;
console.log('       (--operand3), operand3:', operand3);
console.log('       (--operand3), operand4:', operand4);

// Operador sufijo decremento
console.log('   %cOperador sufijo decremento', 'color:#118ab2');
console.log('       %cOperador sufijo unario: decrementa en uno a su operando.', 'color:#06d6a0');
operand4 = operand3--;
console.log('       (operand3--), operand3:', operand3);
console.log('       (operand3--), operand4:', operand4);

// Operador sufijo decremento
console.log('   %cOperador sufijo decremento', 'color:#118ab2');
console.log('       %cOperador sufijo unario: decrementa en uno a su operando.', 'color:#06d6a0');
let nooperand
console.log('       (operand3--), operand3:', operand3);
console.log('       (operand3--), operand4:', operand4);

// Operador negación unario
console.log('   %cOperador negación unario', 'color:#118ab2');
console.log('       %cDevuelve la negación de su operando.', 'color:#06d6a0');
console.log('       -operand3:', -operand3);

// Operador positivo unario
console.log('   %cOperador positivo unario', 'color:#118ab2');
console.log('       %cIntenta convertir el operando en número, si aún no lo es.', 'color:#06d6a0');
let validOperand = +'15';
console.log('       -\'15\':  ', validOperand);
let invalidOperand = +'364f';
console.log('       -\'364f\':', invalidOperand);

// Operador de exponenciación
console.log('   %cOperador de exponenciación', 'color:#118ab2');
console.log('       %cCalcula la base a la potencia de exponente.', 'color:#06d6a0');
console.log('       operand3 ** 2:', operand3 ** 2);



// Operadores lógicos - - - >
console.log('%c\n\nOperadores lógicos', 'color:#ef476f');

// Operador AND (&&)
console.log('   %cOperador AND (&&)', 'color:#118ab2');
console.log('       %cDevuelve true si ambos operandos son true; de lo contrario, devuelve false.', 'color:#06d6a0');
let a1 = true && true;
console.log('       (true && true), a1:    ', { a1 });
a1 = true && false;
console.log('       (true && false), a1:   ', { a1 });
a1 = false && true;
console.log('       (false && true), a1:   ', { a1 });
a1 = true && (3 == 4);
console.log('       (true && (3 == 4)), a1:', { a1 });
a1 = 'Cat' && 'Dog';
console.log('       (\'Cat\' && \'Dog\'), a1:  ', { a1 });
a1 = false && 'Cat';
console.log('       (false && \'Cat\'), a1:  ', { a1 });
a1 = 'Cat' && false;
console.log('       (\'Cat\' && false), a1:  ', { a1 });

// Operador OR (||)
console.log('   %cOperador OR (||)', 'color:#118ab2');
console.log('       %cDevuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.', 'color:#06d6a0');
a1 = true || true;
console.log('       (true || true), a1:    ', { a1 });
a1 = true || false;
console.log('       (true || false), a1:   ', { a1 });
a1 = false || true;
console.log('       (false || true), a1:   ', { a1 });
a1 = true || (3 == 4);
console.log('       (true || (3 == 4)), a1:', { a1 });
a1 = 'Cat' || 'Dog';
console.log('       (\'Cat\' || \'Dog\'), a1:  ', { a1 });
a1 = false || 'Cat';
console.log('       (false || \'Cat\'), a1:  ', { a1 });
a1 = 'Cat' || false;
console.log('       (\'Cat\' || false), a1:  ', { a1 });

// Operador NOT (!)
console.log('   %cOperador NOT (!)', 'color:#118ab2');
console.log('       %cDevuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.', 'color:#06d6a0');
a1 = !true;
console.log('       (!true),  a1:', { a1 });
a1 = !false;
console.log('       (!false), a1:', { a1 });
a1 = !'Cat';
console.log('       (!\'Cat\'), a1:', { a1 });

// Operador de cortocircuito
console.log('   %cOperador de cortocircuito', 'color:#118ab2');
console.log('       %cEvaluación con operador lógico AND (&&).', 'color:#06d6a0');
let a2 = 12;
let b2 = 'Hellow word';
console.log('       (12 && \'Hello word\'), a2 && b2:', a2 && b2);

console.log('       %cEvaluación con operador lógico AND (&&).', 'color:#06d6a0');
a2 = 0;
b2 = 'Hellow word';
console.log('       (0 && \'Hello word\'), a2 && b2:', a2 && b2);

console.log('       %cEvaluación con operador lógico AND (&&).', 'color:#06d6a0');
a2 = 'Hello word';
b2 = null;
console.log('       (\'Hellow word\' && null), a2 && b2:', a2 && b2);

console.log('       %cEvaluación con operador lógico AND (&&).', 'color:#06d6a0');
a2 = null;
b2 = 'Hello word';
console.log('       (null && \'Hello word\'), a2 && b2:', a2 && b2);

console.log('       %cEvaluación con operador lógico AND (&&).', 'color:#06d6a0');
a2 = undefined;
b2 = 'Hello word';
console.log('       (undefined && \'Hello word\'), a2 && b2:', a2 && b2);

console.log('       %cEvaluación con operador lógico OR (||).', 'color:#06d6a0');
a2 = 12;
b2 = 'Hello word';
console.log('       (12 && \'Hello word\'), a2 || b2:', a2 || b2);

console.log('       %cEvaluación con operador lógico OR (||).', 'color:#06d6a0');
a2 = undefined;
b2 = 0;
console.log('       (undefined && 0), a2 || b2:', a2 || b2);



// Operador de fusión nulo - - - >
console.log('%c\n\nOperador de fusión nulo', 'color:#ef476f');
console.log('       %cUsando operador de fusión nulo.', 'color:#06d6a0');
let foo = null ?? 'default string';
console.log('       (null ?? \'default string\'), :   ', foo);

foo = undefined ?? 'default string';
console.log('       (undefined ?? \'default string\'):', foo);

baz = 0 ?? '42';
console.log('       (0 ?? 42):                      ', baz);

console.log('       %cUsando el operador coalescente nulo.', 'color:#06d6a0');
const nullValue = null;
const emptyText = '';
const someNumber = 42;

const valA = nullValue ?? 'default for A';
const valB = emptyText ?? 'default for B';
const valC = someNumber ?? 0;

console.log('       (nullValue ?? \'default for A\'):', { valA });
console.log('       (emptyText ?? \'default for B\') ', { emptyText });
console.log('       (someNumber ?? 00)             ', { valC });

console.log('       %cOperador de fusión nula con operandores AND y OR.', 'color:#06d6a0');
let valD = (null || undefined) ?? 'Foo';
console.log('       (null || undefined ?? \'Foo\'):', { valD });



// Operador de cadenas - - - >
console.log('%c\n\nOperador de cadenas', 'color:#ef476f');
console.log('       %cUnión de dos cadenas con asignación simple.', 'color:#06d6a0');
let string1 = 'mi ';
let string2 = 'cadena';

console.log('       string1 + string2:', string1 + string2);

let string3 = 'alpha';
string3 += 'bet';
console.log('       %cUnión de dos cadenas con asignación abreviada.', 'color:#06d6a0');
console.log('       string3:', { string3 });



// Operador ternario - - - >
console.log('%c\n\nOperador ternario ', 'color:#ef476f');
console.log('       %cUnión de dos cadenas con asignación simple.', 'color:#06d6a0');
let age = 25;
let status = (age >= 18) ? 'Adult' : 'Minor';
console.log('       status:', { status });



// Operador coma - - - >
console.log('%c\n\nOperador coma ', 'color:#ef476f');
console.log('       %cUnión de dos cadenas con asignación simple.', 'color:#06d6a0');
let array1 = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
]

for (let i = 0, j = 9; i <= 9; i++, j--) {
    console.log('       a[' + i + '][' + j + '] = ', array1[i][j]);

}



// Operadores unarios - - - >
console.log('%c\n\nOperadores unarios ', 'color:#ef476f');
console.log('       %cOperador typeof, devuelve el tipo de la variable.', 'color:#06d6a0');
console.log('       typeof string1:', typeof string1);