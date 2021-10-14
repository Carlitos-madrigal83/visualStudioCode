// P R O T O T I P O S
console.groupCollapsed('%c P R O T O T I P O S', 'color:#ffd166; font-weight:bold');
console.log('%cLos prototipos son un mecanismo mediante el cual los objetos en JavaScript herenda características entre sí.', 'color:#06d6a0');
let a = ['Laura', 'Maria'];

// Declara una función que devuelve una clase simulada Persona1
function Persona1(nombre, apellido) { // Clase

    this.nombre = nombre; // Propiedades
    this.apellido = apellido;
    this.edad = 21;

    this.imprimirInfo = function () { // Métodos
        console.log(this.nombre + ' ' + this.apellido + "(" + this.edad + ")");
    }
}

// Estamos cargando uan asociación de pares dentro del prototipo
Persona1.prototype.pais = 'Costa Rica'; // El valor se guarda dentro del prototype.
console.log('   %cMostrando propiedad del prototype', 'color:#118ab2');
console.log('       Persona1.prototype.pais: ' + Persona1.prototype.pais);



let laura = new Persona1('Laura', 'Mendoza'); // Crea un objeto Persona1 con todas las propiedades. Si no añadimos el new
// las propiedades hacen referencia al objeto Window.

console.log('   %cCargando objeto laura', 'color:#118ab2');
console.log('      ', laura);


console.log('%cCreando un método en el prototipo.', 'color:#06d6a0');
function Persona2(nombre, apellido) { // Clase

    this.nombre = nombre; // Propiedades
    this.apellido = apellido;
    this.edad = 21;
}

Persona2.prototype.imprimirInfo = function () {
    console.log('       ' + this.nombre + ' ' + this.apellido + "(" + this.edad + ")");
}

let per1 = new Persona2('Ana', 'Garrido');

// -
console.log('   %cMostrando objeto', 'color:#118ab2');
console.log('      ', per1);
console.log('   %cImprimiendo info del método imprimirInfo', 'color:#118ab2');
console.log('       Persona1.prototype.imprimirInfo(): ' + per1.imprimirInfo()); // Devuelve undefined
