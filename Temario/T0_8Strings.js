// C O M M E N T  G R O U P
// console.group('%cT I T L E  G R O U P', 'color:#ffd166; font-weight:bold');
// console.log('%cDescription group', 'color:#06d6a0');

// Title section - - - >
// console.log('%c\n\nTitle section', 'color:#ef476f');
// console.log('   %cTitle sub-section', 'color:#118ab2');
// console.log('       %cDescription sub-section', 'color:#06d6a0');
// console.log('       operationSubSection:', 20);

// S T R I N G S
console.group('%c S T R I N G S', 'color:#ffd166; font-weight:bold');
console.log('%cLas cadenas son una colección de carácteres accesibles desde índices.', 'color:#06d6a0');



// Manejando de cadenas - - - >
console.log('%c\n\nManejando de cadenas', 'color:#ef476f');

// Creando una cadena
console.log('   %cCreando una cadena', 'color:#118ab2');
console.log('       %cLas cadenas se pueden declarar con comillas simples u dobles indistíntamente.', 'color:#06d6a0');
let string1 = 'Hola mundo';
console.log('      ', { string1 });

// Escapando comillas dobles o simples
console.log('   %cEscapando comillas dobles o simples', 'color:#118ab2');
console.log('       %cPara representar una comilla simple o doble dentro de una cadena hay que escaparla.', 'color:#06d6a0');

let string2 = 'I\'ve got no right to take my place';
console.log('      ', { string2 });

let string3 = "I\"ve got no right to take my place";
console.log('      ', { string3 });

console.log('       %cIncluyendo comillas simples o dobles sin operador de escape.', 'color:#06d6a0');
let string4 = "I\'ve got no right to take my place";
console.log('      ', { string4 });

let string5 = 'I have got no right to take "my place"';
console.log('      ', { string5 });

// Concatenación de cadenas
console.log('   %cConcatenación de cadenas', 'color:#118ab2');
console.log('       %cConcatenando cadenas almacenadas en variables.', 'color:#06d6a0');
let string6 = 'Hola ';
let string7 = 'mundo';
console.log('       ' + string6 + string7);

console.log('       %cConcatenando cadenas almacenadas en variables y cadenas literales.', 'color:#06d6a0');
let string8 = 'Hola';
let string9 = 'mundo';
console.log('       ' + string8 + ' ' + string9 + '. ¿Cómo se encuentran?');

console.log('       %cConcatenando en contexto', 'color:#06d6a0');
// let nombre = prompt('Escribe un nombre');
let name1 = 'Juan';
console.log('       Hola ' + name1);

// Cadenas versus números
console.log('   %cCadenas versus números', 'color:#118ab2');
console.log('       %cLa conversión implícita se realiza de numéro a cadena.', 'color:#06d6a0');
let age = 23;
console.log('       Pedro tiene ' + age + ' años.');

// Cadenas literales largas
console.log('   %cCadenas literales largas', 'color:#118ab2');
console.log('       %cUsando el operador +.', 'color:#06d6a0');
console.log('       Esta es una cadena muy larga que necesita ' +
    'que dividamos en varias líneas porque ' +
    'de lo contrario, mi código es ilegible.');
console.log('       %cUsando el carácter barra invertida (\\).', 'color:#06d6a0');
console.log('       Esta es una cadena muy larga que necesita \
que dividamos en varias líneas porque  \
de lo contrario, mi código es ilegible.');


// Plantillas literales
console.log('   %cPlantillas literales', 'color:#118ab2');
console.log('       %cGenerando cadena mediante plantilla literal.', 'color:#06d6a0');
let firstName = 'Pablo';
let age2 = 23;
console.log(`       ${firstName}, tiene ${age2} años de eddad`);
console.log('       %cCadenas en ES5.', 'color:#06d6a0');
let isWorking = false;
let additionalPay = false;
let string40 = '       Persona ';
string40 += !isWorking ? 'no trabaja' :
    additionalPay ? 'trabaja (nómina + suplemento salarial)' : 'trabaja (nómina)';
console.log(string40);
console.log('       %cEn ES2015 con plantillas literales y sin anidamiento.', 'color:#06d6a0');
isWorking = true;
additionalPay = false;
string40 = `       Persona ${!isWorking ? 'no tabaja' :
    additionalPay ? 'trabaja (nómina + suplemento salarial' : 'trabaja (nómina)'}`;
console.log(string40);
console.log('       %cPlantillas etiquetadas.', 'color:#06d6a0');
let persona = 'Mike';
let edad = 28;

function myTag(strings, expPersona, expEdad) {

    let str0 = strings[0];
    let str1 = strings[1];

    let strEdad;

    if (expEdad < 75) {
        strEdad = 'joven';
    } else {
        strEdad = 'viejo';
    }

    return `       ${str0}${expPersona}${str1}${strEdad}.`;
}
let salida = myTag`La persona ${persona} es un ${edad}`;
console.log(salida);
console.log('       %cCadenas en crudo (raw).', 'color:#06d6a0');
function etiqueta(strings) {
    console.log(strings.raw[0]);
}
etiqueta`       Texto de cadena de caracteres 1\n Texto de cadena de caracteres 2`;

// Comparar cadenas
console.log('   %cComparar cadenas', 'color:#118ab2');
console.log('       %cComparando código ASCII con los operadores (>, <, >=, <=, !=, !==, ==, ===).)', 'color:#06d6a0');
let letterA = 'A'; // código 65
let letterB = 'B'; // código 66
console.log('       letterA <  letterB:', (letterA < letterB));
console.log('       letterA >  letterB:', (letterA > letterB));
console.log('       letterA == letterB:', (letterA == letterB));
console.log('       letterA != letterB:', (letterA != letterB));

// Primitivas String y objetos String
console.log('   %cPrimitivas String y objetos String', 'color:#118ab2');
console.log('       %cJavaScript distinque entre objetos String y valores primitivos String.', 'color:#06d6a0');
let string13 = '2 + 2';
let stringObject = new String('2 + 2');
console.log('       typeof string13:', typeof string13);
console.log('       eval(string13):', eval(string13));
console.log('       typeof stringObject:', typeof stringObject);
console.log('       eval(stringObject):', eval(stringObject));

// Conversión objeto a primitivo String
console.log('   %cConversión objeto a primitivo String', 'color:#118ab2');
console.log('       %cUn objeto String puede ser convertido a su contraparte primitiva.', 'color:#06d6a0');
console.log('       typeof stringObject:', typeof stringObject);
console.log('       typeof stringObject.valueOf():', typeof stringObject.valueOf());

// Longitud de una cadena
console.log('   %cLongitud de una cadena', 'color:#118ab2');
console.log('       %cUna cadena dispone de la propiedad length al igual que los arrays.', 'color:#06d6a0');
let string14 = 'Esta cadena contiene 34 caracteres';
console.log('       string14.length:', string14.length);


// Métodos - - - >
console.log('%c\n\nMétodos', 'color:#ef476f');

// toString
console.log('   %c○ toString()', 'color:#118ab2');
console.log('       %cPerteneciente a todos los objetos. Este es llamado al representar el objeto como texto, [object type].', 'color:#06d6a0');
let objeto = new Object();
console.log('       objeto.toString():;', objeto.toString());
console.log('       %cSobreescribiendo el método por defecto toString de un objeto personalizado.', 'color:#06d6a0');
function Dog(name, breedingCenter, color, sex) {
    this.name = name;
    this.breedingCenter = breedingCenter;
    this.color = color;
    this.sex = sex;
}
let dog1 = new Dog('Gabby', 'Laboratorio', 'chocolate', 'femenino');
console.log('       dog1.toString():', dog1.toString());
Dog.prototype.toString = function dogToString() {
    return 'Dog ' + this.name + ' is ' + this.sex + ' ' + this.color + ' ' + this.breedingCenter;
}
console.log('       dog1.toString():', dog1.toString());

// toLowerCase
console.log('   %c○ toLowerCase()', 'color:#118ab2');
console.log('       %cDevuelve el valor de la cadena que lo llama convertido en minúsculas.', 'color:#06d6a0');
let string10 = 'ALFABETO';
console.log('       string10.toLowerCase():', string10.toLowerCase());

// toUpperCase
console.log('   %c○ toUpperCase()', 'color:#118ab2');
console.log('       %cDevuelve el valor de la cadena que lo llama convertido en mayúsculas.', 'color:#06d6a0');
let string11 = 'alfabeto';
console.log('       string11.toUpperCase():', string11.toUpperCase());

// trim
console.log('   %c○ trim()', 'color:#118ab2');
console.log('       %cElimina los espacios en blanco en ambos extremos del string.', 'color:#06d6a0');
let string12 = '     Texto sin espacios de los extremos ';
console.log('       string12.trim():', '---' + string12.trim() + '---');

// trimStart
console.log('   %c○ trimStart()', 'color:#118ab2');
console.log('       %cElimina los espacios en blanco del principio de la cadena.', 'color:#06d6a0');
let string15 = '     Texto sin espacios al principio     ';
console.log('       string12.trimStart():', '---' + string15.trimStart() + '---');

// trimEnd
console.log('   %c○ trimEnd()', 'color:#118ab2');
console.log('       %cElimina los espacios en blanco del final de la cadena.', 'color:#06d6a0');
let string16 = '     Texto sin espacios al final     ';
console.log('       string12.trimEnd():', '---' + string16.trimEnd() + '---');

// charAt
console.log('   %c○ charAt()', 'color:#118ab2');
console.log('       %cDevuelve el carácter UTF-16 de una cadena.', 'color:#06d6a0');
let string17 = 'Brave new world';
console.log('       string17.charAt(0):', string17.charAt(0));
console.log('       string17.charAt(7):', string17.charAt(7));
console.log('       string17.charAt(999):', string17.charAt(999));

// concat
console.log('   %c○ concat()', 'color:#118ab2');
console.log('       %cCombina dos o más cadenas devolviendo una cadena de texto nueva.', 'color:#06d6a0');
let string18 = 'Hello ';
let string19 = 'world';
console.log('       string18.concat(string19):', string18.concat(string19));
console.log('       string18.concat(string19):', string18.concat(string19, '. Have a nice day.'));
console.log('       \'\'.concat({}):', ''.concat({}));
console.log('       \'\'.concat([]):', ''.concat([]));
console.log('       \'\'.concat([]):', ''.concat(null));
console.log('       \'\'.concat(true):', ''.concat(true));
console.log('       \'\'.concat(4, 5):', ''.concat(4, 5));

// repeat
console.log('   %c○ repeat()', 'color:#118ab2');
console.log('       %cDevuelve una cadena nueva con el número de copias especificadas de una cadena concatenándolas.', 'color:#06d6a0');
let string20 = 'abc';
console.log('       string20.repeat(2):', string20.repeat(2));
console.log('       string20.repeat(3.5):', string20.repeat(3.5));

// slice
console.log('   %c○ slice()', 'color:#118ab2');
console.log('       %cExtrae una sección de una cadena y devuelve una cadena nueva.', 'color:#06d6a0');
let string21 = 'La mañana se nos echa encima.';
console.log('       string21.slice(3):', string21.slice(3));
console.log('       string21.slice(3, 21):', string21.slice(3, 21));
console.log('       string21.slice(3, -7):', string21.slice(3, -7));
console.log('       string21.slice(-3):', string21.slice(-3));
console.log('       string21.slice(-3, -1):', string21.slice(-3, -1));

// split
console.log('   %c○ split()', 'color:#118ab2');
console.log('       %cDivide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en subcadenas.', 'color:#06d6a0');
let string22 = 'bmw, mercedes, audi, bentley, ferrari';
let separadorComa = ','
console.log('       Cadena original: ' + string22);
console.log('       separadorComa: \',\'');
console.log('       string22.split(separadorComa):', string22.split(separadorComa));
console.log('       %cSeparador undefined.', 'color:#06d6a0');
let separadorUndefined = undefined;
console.log('       Cadena original: ' + string22);
console.log('       separadorUndefined: \'undefined\'');
console.log('       string22.split(separadorUndefined):', string22.split(separadorUndefined));
console.log('       %cSeparador espacio.', 'color:#06d6a0');
let separadorEspacio = ' ';
console.log('       Cadena original: ' + string22);
console.log('       separadorEspacio: \' \'');
console.log('       string22.split(separadorEspacio):', string22.split(separadorEspacio));
console.log('       %cSeparador vacío.', 'color:#06d6a0');
let string23 = 'mon, tue, wed';
let separadorVacio = '';
console.log('       Cadena original: ' + string23);
console.log('       separadorVacio: \'\'');
console.log('       string23.split(separadorVacio):  ', string23.split(separadorVacio));
console.log('       %cEliminar espacios de una cadena.', 'color:#06d6a0');
let string24 = 'Harray Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand';
let expresionRegular = /\s*;\s*/;
console.log('       Cadena original: ' + string24);
console.log('       expresionRegular: /\\s*;\\s*/');
console.log('       string24.split(expresionRegular):', string24.split(expresionRegular));
console.log('       %cDevolver un número limitado de divisiones.', 'color:#06d6a0');
let string25 = 'Hola Mundo. ¿Cómo estás hoy?';
console.log('       Cadena original: ' + string25);
console.log('       string25.split(\' \', 3):', string25.split(' ', 3));
console.log('       %cParéntesis de captura.', 'color:#06d6a0');
let string26 = 'Hola 1 mundo. Oración número 2.';
let expresionRegular2 = /(\d)/;
console.log('       Cadena original: ' + string26);
console.log('       expresionRegular2: /\\s*;\\s*/');
console.log('       string26.split(expresionRegular):', string26.split(expresionRegular2));;
console.log('       %cDar la vuelta a una cadena.', 'color:#06d6a0');
let string27 = 'asdfghjkl';
console.log('       Cadena original: ' + string27);
console.log('       string27.split(\'\').reverse().join(\'\'):', string27.split('').reverse().join(''));

// replace
console.log('   %c○ replace()', 'color:#118ab2');
console.log('       %cDevuelve una nueva cadena con algunas o todas las coincidencias de un patron, siendo cada una de estas coincidencias reemplazadas por reemplazo.', 'color:#06d6a0');
let string28 = 'Apples are round, and apples are juicy';
let wordReplacement = 'orange';
console.log('       Cadena original: ' + string28);
console.log('       Palabra a sustituir: apples');
console.log('       wordReplacement: orange');
console.log('       string28.replace(\'apples\', wordReplacement):', string28.replace('apples', wordReplacement));
console.log('       %cUsando global e ignore con replace.', 'color:#06d6a0');
console.log('       Cadena original: ' + string28);
console.log('       Palabra a sustituir: apples');
console.log('       wordReplacement: orange');
console.log('       string28.replace(\/apples\/gi, wordReplacement):', string28.replace(/apples/gi, wordReplacement));
console.log('       %cDefiniendo la expresión regular en replace.', 'color:#06d6a0');
let string29 = 'Twas the night before Xmas...';
console.log('       Cadena original: ' + string29);
console.log('       Palabra a sustituir: apples');
console.log('       wordReplacement: orange');
console.log('       string29.replace(/xmas/i, \'Christmas\'):', string29.replace(/xmas/i, 'Christmas'));
console.log('       %cUsando parámetros flags en replace.', 'color:#06d6a0');
console.log('       Cadena original: ' + string28);
console.log('       Palabra a sustituir: apples');
console.log('       Palabra sustituta: orange');
console.log('       string28.replace(\'apples\', \'orange\', \'gi\'):', string28.replace('apples', 'orange', 'gi'));
console.log('       %cConectando palabras en una cadena.', 'color:#06d6a0');
let string30 = 'John Smith';
let expresionRegular3 = /(\w+)\s(\w+)/;
console.log('       Cadena original: ' + string30);
console.log('       string30.replace(expresionRegular3, \'$2, $1\'):', string30.replace(expresionRegular3, '$2 $1'));

// includes
console.log('   %c○ includes()', 'color:#118ab2');
console.log('       %cDetermina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false.', 'color:#06d6a0');
let string31 = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox';
console.log('       The word \'' + word + '\' ' + (string31.includes(word) ? 'is' : 'is not') + ' in the string31');

// startsWith
console.log('   %c○ startsWith()', 'color:#118ab2');
console.log('       %cIndica si una cadena de texto comienza con los caracteres de una cadena de texto, devolviendo true o false.', 'color:#06d6a0');
let string32 = 'Ser, o no ser. ¡Esa es la cuestión!';
console.log('       Cadena original: ' + string32);
console.log('       string32.startsWith(\'Ser\')          ', string32.startsWith('Ser'));
console.log('       string32.startsWith(\'no ser\')       ', string32.startsWith('no ser'));
console.log('       string32.startsWith(\'Esa es la\', 16)', string32.startsWith('Esa es la', 16));

// search
console.log('   %c○ search()', 'color:#118ab2');
console.log('       %cEjecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.', 'color:#06d6a0');
let string33 = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme!';
console.log('       Cadena original: ' + string33);
console.log('       string33.endsWith(/Mancha/):', (string33.search(/Mancha/) ? 'Containes word' : 'Does not contain word'));
console.log('       %cSi se pasa un objeto que no es expresión regular, se convierte implícitamente.', 'color:#06d6a0');
console.log('       Cadena original: ' + string33);
console.log('       string33.endsWith(\'Mancha\'):', (string33.search('Mancha') ? 'Containes word' : 'Does not contain word'));

// match
console.log('   %c○ match()', 'color:#118ab2');
console.log('       %cSe usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.', 'color:#06d6a0');
let string34 = 'Mostrando información, del apartado de información sobre reacciones nucleares.';
console.log('       Cadena original: ' + string34);
console.log('       string34.match(/información/g):', string34.match(/información/g));
let string35 = 'Para más información, vea Capítulo 3.4.5.1.';
console.log('       Cadena original: ' + string35);
console.log('       string35.match(/(capítulo \\d+(\\.\\d)*)/i):', string35.match(/(capítulo \d+(\.\d)*)/i));
console.log('       %cUsando flags con match.', 'color:#06d6a0');
let string36 = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
let expresionRegular4 = /[A-E]/gi;
console.log('       Cadena original: ' + string36);
console.log('       expresionRegular4: ' + expresionRegular4);
console.log('       string36.match(expresionRegular4):', string36.match(expresionRegular4));

// indexOf
console.log('   %c○ indexOf()', 'color:#118ab2');
console.log('       %cRetorna la primer aocurrencia dentro del objeto String.', 'color:#06d6a0');
let string37 = 'Blue Whale';
let string38 = 'Brave new world';
console.log('       Cadena original: ' + string37);
console.log('       string37.indexOf(\'Blue\')):', string37.indexOf('Blue'));
console.log('       %cCoincidencia no encontrada.', 'color:#06d6a0');
console.log('       string37.indexOf(\'Blute\')):', string37.indexOf('Blute'));
console.log('       %cIndicando índice de búsqueda.', 'color:#06d6a0');
console.log('       string37.indexOf(\'Whale\', 5)):', string37.indexOf('Whale', 5));
console.log('       %cSolicitando cadena vacía.', 'color:#06d6a0');
console.log('       string37.indexOf(\'\', 11)):', string37.indexOf('', 11));
console.log('       %cUsando indexOf y lastIndexOf.', 'color:#06d6a0');
console.log('       string38.indexOf(\'w\')):', string38.indexOf('w'));
console.log('       string38.lastIndexOf(\'w\')):', string38.lastIndexOf('w'));
console.log('       string38.indexOf(\'new\')):', string38.indexOf('new'));
console.log('       string38.lastIndexOf(\'new\')):', string38.lastIndexOf('new'));

// lastIndexOf
console.log('   %c○ lastIndexOf()', 'color:#118ab2');
console.log('       %cDevuelve la posición el valorBusqueda dentro del objeto String de la última ocurrencia.', 'color:#06d6a0');
let string39 = 'canal';
console.log('       Cadena original: ' + string39);
console.log('       string39.lastIndexOf(\'a\')):', string39.lastIndexOf('a'));
console.log('       string39.lastIndexOf(\'a\', 2)):', string39.lastIndexOf('a', 2));
console.log('       string39.lastIndexOf(\'a\', 0)):', string39.lastIndexOf('a', 0));
console.log('       string39.lastIndexOf(\'x\')):', string39.lastIndexOf('x'));

// charCodeAt
console.log('   %c○ charCodeAt()', 'color:#118ab2');
console.log('       %cDevuelve un número indicando el valor Unicode del carácter en el índice proporcionado.', 'color:#06d6a0');
console.log('       \'ABC\'.lastIndexOf(0)):', 'ABC'.charCodeAt(0));
console.log('       \'AaSdas\'.lastIndexOf(0)):', 'AaSdas'.charCodeAt(2));

// fromCharCode
console.log('   %c○ fromCharCode()', 'color:#118ab2');
console.log('       %cDevuelve una cadena creada mediante el uso de uan secuencia de valores Unicode.', 'color:#06d6a0');
console.log('       String.fromCharCode(65, 66, 67)):', String.fromCharCode(65, 66, 67));

// fromCodePoint
console.log('   %c○ fromCodePoint()', 'color:#118ab2');
console.log('       %cDevuelve una cadena creada por una secuencia de puntos de código.', 'color:#06d6a0');
console.log('       String.fromCodePoin(65, 66, 67)):', String.fromCodePoint(65, 66, 67));

// codePointAt
console.log('   %c○ codePointAt()', 'color:#118ab2');
console.log('       %cDevuelve una cadena creada por una secuencia de puntos de código.', 'color:#06d6a0');
console.log('       \'ABC\'.codePointAt(65, 66, 67)):', 'ABC'.codePointAt());

// localeCompare
console.log('   %c○ localeCompare()', 'color:#118ab2');
console.log('       %cDevuelve un número que indica si la cadena de caracteres actual es anterior, posterior o igual en orden lexicográfico.', 'color:#06d6a0');
console.log('       \'a\'.localeCompare(\'c\')):', 'a'.localeCompare('c'));
console.log('       \'check\'.localeCompare(\'against\')):', 'check'.localeCompare('against'));
console.log('       \'check\'.localeCompare(\'check\')):', 'check'.localeCompare('check'));