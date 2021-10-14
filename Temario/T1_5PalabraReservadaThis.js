// 'use strict'
// F U N C I O N E S  M É T O D O S  Y  O B J E T O  T H I S
console.group('%cF U N C I O N E S  M É T O D O S  Y  O B J E T O  T H I S', 'color:#ffd166; font-weight:bold');
console.log('%cNo existen los procedimientos en JavaScript, solo las funciones.', 'color:#06d6a0');

let persona = {
    nombre: 'Maria',
    apellido: 'Dubon',
    imprimirNombre: function () { // Esto es un método
        // console.log(nombre) // Devuleve un error poque busca en el ámbito global dicha variable
        console.log('     ', this); // Haciendo referencia a la propiedad mediante el objeto this

        console.log('   %cAcceso global al objeto global desde cualquier parte del código', 'color:#118ab2');
        console.log('     ', globalThis); // Nos permite hacer referencia al objeto global con independencia en donde
        // se esté ejecutando el código
    },
    direccion: {
        pais: 'España',
        obtenerPais: function () { // Contexto es de objeto (debido a que es una propiedad del objeto)

            console.log('   %cObteniendo this objeto interno', 'color:#118ab2');
            console.log('      La dirección es en ' + this.pais); // El this se utiliza dentro de métodos
            let self = this; // El selft se utiliza para capturar el this

            let nuevaDireccion = function () { // Contexto de ámbito
                console.log('   %cObteniendo self', 'color:#118ab2');
                console.log('     ', self);

                console.log('   %cObteniendo this objeto interno', 'color:#118ab2');
                console.log('      La dirección es en ' + self.pais);
            }
            nuevaDireccion();
        }
    }
};

console.log('   %cEjecutando método persona.imprimirNombre()', 'color:#118ab2');
persona.imprimirNombre(); // Uso del método del objeto persona

persona.direccion.obtenerPais(); // Mostrando uso del this

console.log('   %cContexto global', 'color:#118ab2');
console.log('     this:', this);

console.log('   %cAgregando una propiedad al objeto global', 'color:#118ab2');
console.log('     this.a = 37', this.a = 37);

console.log('   %cObjeto global desde cualquier contexto', 'color:#118ab2');
console.log('     globalThis', globalThis);

console.log('   %cContexto de la función', 'color:#118ab2');

function f1() {
    return this;
}
console.log('     f1():', f1());

console.log('   %cMétodo de un objeto', 'color:#118ab2');
console.log('     %cThis es ligado al objeto', 'color:#06d6a0');

let o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
}
console.log('     o.f():', o.f());

console.log('   %cLigando método a un objeto', 'color:#118ab2');
let o2 = {prop: 37};

function independent() {
    return this.prop;
}

o2.f = independent;

console.log('     o2.f():', o2.f());

console.log('   %cReferencia inmediata a this', 'color:#118ab2');
o.b = {g: independent, prop: 42};
console.log('     o.b.g()', o.b.g());

