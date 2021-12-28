let per1 = {
    nombre: 'Carlos',
    edad: 38,
    direccion: {
        ciudad: 'Malaga',
        cp: 49005,
        piso: '4E',
        mostrarInformacionDireccion: function () {
            console.log(this);

            let obj = {
                iban: 'ES3048658375687367736',
                dni: '3726t432F',
                mostrarInformacion: function () {
                    console.log(this);
                }
            }

            console.log(obj.mostrarInformacion);
            obj.mostrarInformacion();
        }
    },
    mostrarInformacion: function () {

        console.log('Nombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nCiudad: ' + this.ciudad);
    }

};

let per2 = {
    nombre: 'Jose',
    edad: 20,
    ciudad: 'Madrid',
    direccion: {
        ciudad: 'Malaga',
        cp: 49005,
        piso: '4E',
        mostrarInformacionDireccion: function () {
            console.log(this);

            let obj = {
                iban: 'ES3048658375687367736',
                dni: '3726t432F',
                mostrarInformacion: function () {
                    console.log(this);
                }
            }

            console.log(obj.mostrarInformacion);
            obj.mostrarInformacion();
        }
    },
    mostrarInformacion: function () {

        console.log('Nombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nCiudad: ' + this.ciudad);
    }
};

let per3 = {
    nombre: 'Marta',
    edad: 14,
    ciudad: 'Salamanca',
    direccion: {
        ciudad: 'Malaga',
        cp: 49005,
        piso: '4E',
        mostrarInformacionDireccion: function () {
            console.log(this);

            let obj = {
                iban: 'ES3048658375687367736',
                dni: '3726t432F',
                mostrarInformacion: function () {
                    console.log(this);
                }
            }

            console.log(obj.mostrarInformacion);
            obj.mostrarInformacion();
        }
    },
    mostrarInformacion: function () {

        console.log('Nombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nCiudad: ' + this.ciudad);
    }
};

