// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// T R U T H Y  F A L S Y
console.group('%c T R U T H Y  F A L S Y', 'color:#ffd166; font-weight:bold');
console.log('%cValores que son considerados verdaderos o falsos.', 'color:#06d6a0');



// Conversiones valores truthy y falsy - - - >
console.log('\n\n%cConversiones valores truthy y falsy', 'color:#ef476f');

// Valores truthy (verdaderos/true)
console.log('\n   %cValores truthy (verdaderos/true)', 'color:#118ab2');

console.log('       %cBoolean.', 'color:#06d6a0');
let value = Boolean(true);
console.log('       Boolean(true):', { value });

console.log('       %cNumber.', 'color:#06d6a0');
value = Boolean(42);
console.log('       Boolean(42):', { value });

console.log('       %cNumber.', 'color:#06d6a0');
value = Boolean(3.14);
console.log('       Boolean(3.14):', { value });

console.log('       %cNumber.', 'color:#06d6a0');
value = Boolean(-42);
console.log('       Boolean(-42):', { value });

console.log('       %cNumber.', 'color:#06d6a0');
value = Boolean(-3.14);
console.log('       Boolean(-3.14):', { value });

console.log('       %cInfinity.', 'color:#06d6a0');
value = Boolean(Infinity);
console.log('       Boolean(Infinity):', { value });

console.log('       %cInfinity.', 'color:#06d6a0');
value = Boolean(-Infinity);
console.log('       Boolean(-Infinity):', { value });

console.log('       %cString.', 'color:#06d6a0');
value = Boolean('foo');
console.log('       Boolean(\'foo\'):', { value });

console.log('       %c{}.', 'color:#06d6a0');
value = Boolean({});
console.log('       Boolean({}):', { value });

console.log('       %cObject.', 'color:#06d6a0');
value = Boolean({});
console.log('       Boolean({}):', { value });

console.log('       %cArray.', 'color:#06d6a0');
value = Boolean([]);
console.log('       Boolean([]):', { value });

console.log('       %cObject.', 'color:#06d6a0');
value = Boolean(new Date());
console.log('       Boolean(new Date()):', { value });

// Valores falsy (falsos/false)
console.log('\n   %cValores falsy (falsos/false)', 'color:#118ab2');

console.log('       %cBoolean.', 'color:#06d6a0');
value = Boolean(false);
console.log('       Boolean(false):', { value });

console.log('       %cNumber.', 'color:#06d6a0');
value = Boolean(0);
console.log('       Boolean(0):', { value });

console.log('       %cNumber.', 'color:#06d6a0');
value = Boolean(-0);
console.log('       Boolean(-0):', { value });

console.log('       %cString.', 'color:#06d6a0');
value = Boolean("");
console.log('       Boolean(""):', { value });

console.log('       %cString.', 'color:#06d6a0');
value = Boolean('');
console.log('       Boolean(\'\'):', { value });

console.log('       %cString.', 'color:#06d6a0');
value = Boolean(``);
console.log('       Boolean(\`\`):', { value });

console.log('       %cNull.', 'color:#06d6a0');
value = Boolean(null);
console.log('       Boolean(null):', { value });

console.log('       %cUndefined.', 'color:#06d6a0');
value = Boolean(undefined);
console.log('       Boolean(undefined):', { value });