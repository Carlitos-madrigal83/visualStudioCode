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

let key = prompt('Indique la primera clave');
let key2 = prompt('Indique la segunda clave');
let newKey = prompt('Indique la nueva clave');
let newValue = prompt('Indique el valor de la nueva clave');


persona[key][key2][newKey] = newValue;

console.log(persona.direccion.edificio[newKey]);
