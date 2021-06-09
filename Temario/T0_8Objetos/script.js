// O B J E T O S
console.group('%cO B J E T O S', 'color:#118ab2; font-weight:bold');
console.log('%cNotación de punto', 'color:#06d6a0');

let persona = {
    nombre: 'Juan', // propiedad: clave + valor, separados por dos puntos
    apellido: 'Herrera',
    edad: 25,
    direccion: {
        pais: 'España',
        ciudad: 'Madrid',
        edificio: {
            nombre: 'RIO',
            telefono: '658945728'
        }
    } // Al último elemento de cada objeto no se le pone la coma final
}

// Notación de punto, nos permite distinguir cada nivel jerárquico por cada punto.
console.log('%cNotación de punto, nos permite distinguir cada nivel jerárquico por cada punto.', 'color:#06d6a0');
console.log('   persona.nombre:', persona.nombre);
console.log('   persona.nombre:', persona.nombre);

// Cambiar valores miembros del objeto
console.log('%cCambiar valores de propiedades del objeto.', 'color:#06d6a0');
persona.apellido = 'Meléndez'; // Cambiar la clave apellido con el nuevo valor.
console.log('   persona.apellido:', persona.apellido);

// Agregar nuevas propiedades al objeto.
console.log('%cAgregar nuevas propiedades al objeto.', 'color:#06d6a0');
persona.direccion.zipcode = 1154; // Agrega automáticamente la nueva propiedad al no encontrarla dentro del nivel.
console.log('   persona.direccion:', persona.direccion);

// Carga de propiedad no existente a nivel de objeto
console.log('%cCarga de propiedad no existente a nivel de objeto.', 'color:#06d6a0');
console.log('   persona.direccion.cargaNueva', persona.direccion.cargaNueva);

// Acceso rápido a valores de propiedades de uso constante.
console.log('%cAcceso rápido a valores de propiedades de uso constante.', 'color:#06d6a0');
let edificio = persona.direccion.edificio;
edificio.numpiso = '8A';
console.log('  ', persona);
console.groupEnd();

//////////////////////////////////////////////////////////////////////////

// Crear métodos dentro del objeto ------ crear en notación de punto
console.log('%cCrear métodos dentro del objeto.', 'color:#06d6a0');
persona.mostrarInformacion
persona.mostrarInformacion = function() {
    console.log('Imprimiendo información del this:', this);
}
console.log('  ', persona);
persona.mostrarInformacion();

// Eliminar ----- crear en notación de punto
console.log('%cEliminar miembro objeto', 'color:#06d6a0');
// console.log('   delete persona.edad:', delete persona.edad);
console.log('  ', persona);

//////////////////////////////////////////////////////////////////////////

// N O T A C I Ó N  D E  C O R C H E T E
console.group('%cN O T A C I Ó N  D E  C O R C H E T E', 'color:#118ab2; font-weight:bold');

// Acceso a datos de forma dinámica, es decir, el usuario o cualquier persona puede accesar a la información
// que el quiera.

console.log('%cNotación de corchete, nos permite la carga dinámica.', 'color:#06d6a0');
let key = 'edad'; // usario, bbdd
let key2 = 'edad2'; // usario, bbdd

console.log('  ', persona);
console.log('   persona[key]', persona[key]);

// Carga de propiedad no existente a nivel de objeto
console.log('%cCarga de propiedad no existente a nivel de objeto.', 'color:#06d6a0');
console.log('    persona[key2]', persona[key2]);


// Crear métodos dentro del objeto ------ crear en notación de punto
console.log('%cCrear métodos dentro del objeto.', 'color:#06d6a0');
persona.mostrarInformacion = function() {
    console.log('Imprimiendo información del this:', this);
}

console.log('  ', persona);
persona.mostrarInformacion();

// Eliminar ----- crear en notación de punto
console.log('%cEliminar miembro objeto', 'color:#06d6a0');
// console.log('   delete persona.edad:', delete persona.edad);
console.log('  ', persona);

let keys = Object.keys(persona); // Almaceno las claves del objeto
let values = Object.values(persona); // Almaceno los valores del objeto

// Recorriendo un objeto con for
console.log('%cRecorriendo un objeto con for.', 'color:#06d6a0');
for (let i = 0; i < keys.length; i++) {
    console.log('   ', keys[i] + ': ' + persona[keys[i]]);
    // console.log(keys[i] + ': ' + values[i]);
}

// Recorriendo un objeto con forEach
console.log('%cRecorriendo un objeto con forEach.', 'color:#06d6a0');

keys.forEach(key => {
    console.log('   ', key + ': ' + persona[key]);
});



const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

let arrayDevueltoMap = materials.map(material => 'new' + material);
let arrayDevueltoMap2 = materials.map(function(material) { return 'new' + material });

function map(funcionRecibida) {
    this
    funcionRecibida(this[i]);

}

console.log(arrayDevueltoMap);
console.log(materials);


persona.mostrarInformacion();

// new Map([iterable]);