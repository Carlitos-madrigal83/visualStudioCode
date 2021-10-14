const a = 20;
console.log({ a }); // 0X000


//a = 10; // 0X111
console.log({ a });

//a = a + 20; // 0x222
console.log({ a });

let ciudad = 'Málaga'; // 2x777

console.log(ciudad[0]);
ciudad[0] = 'H';
console.log(ciudad[0]);
ciudad = 'H' + ciudad.substr(1); // 5x000
console.log(ciudad[0]);


ciudad = 'Hola' + ' mundo';


const c = {
    nombre: 'Carlos'
}

c.nombre = 'Marta';

console.log(c);

c = {};


let casa = {
    colorPared = 'blanca'
}

casa.colorPared = 'Rosa';

casa = {
    colorPared: 'Azul'
}