// N O T A C I Ó N  D E  P U N T O
console.groupCollapsed("%cN O T A C I Ó N  D E  P U N T O", "color:#ffd166; font-weight:bold");

var persona = {
    nombre: 'Juana',
    apellido: 'Herrera',
    edad: 25,
    direccion: {
        pais: 'España',
        ciudad: 'Madrid',
        edificio: {
            nombre: 'RIO',
            telefonoo: '658945728'
        }
    }
}

// Notación de punto, nos permite distinguir cada nivel jerárquico por cada punto.
console.log("%cNotación de punto, nos permite distinguir cada nivel jerárquico por cada punto.", "color:#06d6a0");
console.log('   persona.nombre:', persona.nombre);
console.log('   persona.direccion:', persona.direccion.pais);

// Actualizar miembros del objeto.
console.log("%cAgregar nuevas propiedades al objeto.", "color:#06d6a0");
persona.apellido = 'Meléndez'; // Actualiza la clave apellido con el nuevo valor 'Melendez'.
console.log('   persona.apellido');
console.log('  ', persona.apellido);

// Agregar nuevas propiedades al objeto.
console.log("%cAgregar nuevas propiedades al objeto.", "color:#06d6a0");
persona.direccion.zipcode = 1154; // Agrega automáticamente la nueva propiedad al no encontrarla dentro del nivel.
console.log('   persona.direccion');
console.log('  ', persona.direccion);

// Carga de propiedad no existente a nivel de objeto.
console.log("%cCarga de propiedad no existente a nivel de objeto.", "color:#06d6a0");
console.log('   persona.direccion', persona.direccion.cargaNueva); // Hay que tener cuidado con acceder a propiedades no existentes
// devuelve automáticamente undefined sin indicarnos que dicha propiedad no existe en el nivel accedido.
console.log('   persona.direccion');
console.log('  ', persona.direccion);


// Acceso rápido a valores de propiedades de uso constante.
console.log("%cAcceso rápido a valores de propiedades de uso constante.", "color:#06d6a0");

var edificio = persona.direccion.edificio; // Optimizamos el trabajo haciendo el uso de la referencia.
edificio.nopiso = '7vo piso';

console.log('  ', persona);

console.groupEnd();

// N O T A C I Ó N  D E  C O R C H E T E
console.groupCollapsed("%cN O T A C I Ó N  D E  C O R C H E T E", "color:#ffd166; font-weight:bold");

// Acceso a datos de forma dinámica, es decir, el usuario o cualqueir persona puede accesar a la información que el quiere.
var campo = 'edad'; // Valor recibido por la entrada de un usario o una base de datos.
var campo2 = 'edad2'; // Valor recibido por la entrada de un usuario o una base de datos.

console.log('  ', persona);
console.log('   persona[campo]', persona[campo]);

// Carga de propiedad no existente a nivel de objeto.
console.log("%cCarga de propiedad no existente a nivel de objeto.", "color:#06d6a0");
console.log('   persona[campo2]', persona[campo2]);
console.log('  ', persona);

console.groupEnd();

