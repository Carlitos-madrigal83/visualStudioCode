const button = document.querySelector('#init-program');

const contacts = [];

function Contact(name, lastname, phone, dni) { // Plantilla
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.dni = dni;
}

let dictionaryColors = {
    titleMenu: 'color:#118ab2', // color títulos secciones de ventanas
    dataList: 'color:#ffd166', // color de indices, carga información formato lista
    confirmationFinishProcess: 'color:#06d6a0', // confirmaciónes positivas de proceso realizado correctamente
    messageError: 'color:#ef476f',
    finishProgram: 'color:#ef476f'
}

function createContact() { // 1 - pedir los datos al usuario, 2 - generar el contacto y mistrarlo por consola

    const objContact = new Contact();
    const keyUser = Object.keys(objContact);
    const newContact = new Contact();
    let dataUser = [];
    let expresionesRegulares = [/^[a-zA-Z áéíóú]{1,32}$/, /^[a-zA-Z áéíóú]{1,32}$/, /^[0-9]{9}$/, /^[0-9]{8,8}[A-Za-z]$/];

    for (let i = 0; i < keyUser.length; i++) {
        let datoRecogido = prompt('Indique el ' + keyUser[i]);
        dataUser.push(expresionesRegulares[i].test(datoRecogido));

    }

    for (let i = 0; i < keyUser.length; i++) {

        newContact[keyUser[i]] = dataUser[i];
    }

    console.log(newContact);

    contacts.push(newContact);
}


function modifyContact() {
    console.log('modifyContact');

}

function showDataContact() {
    console.log('showDataContact');

}

function showAllContacts() {
    console.log('showAllContacts');
}

function removeContact() {
    console.log('removeContact');
}





function bridgeExecuteInstruction(titleMenu, menu, funcionesEjecutar) { // Argumentos

    let optionUser,
        tituloMenuMostrado = false,
        menuFraccionado = menu.split('\n'),
        optionExit = menuFraccionado[menuFraccionado.length - 1][0]; // 2 - Volver menú principal (Cancelar)

    do {
        if (!tituloMenuMostrado) {
            console.log('%c' + titleMenu, dictionaryColors.titleMenu);

        } else {
            tituloMenuMostrado = false;
        }

        console.log(menu);

        optionUser = prompt('Elija una de estas 2 opciones');
        console.clear();

        // optionUser = '';
        // optionUser = 'Pepe';
        // optionUser = '25';
        // optionUser = null

        if ((optionUser !== null && optionUser !== '') && !Number.isNaN(+optionUser)) { // cuando optionUser sea un número

            if (Array.isArray(funcionesEjecutar) && (+optionUser >= 1 && +optionUser < menuFraccionado.length)) {

                funcionesEjecutar[optionUser - 1]();

            } else if (optionUser === '1') {
                funcionesEjecutar();
            }

        } else if (optionUser !== null) { // optionUser no es un número
            console.log('%c' + titleMenu, dictionaryColors.titleMenu);
            console.log('%cEl valor introducido no es válido', dictionaryColors.messageError);
            tituloMenuMostrado = true;
        }

    } while (optionUser !== optionExit && optionUser !== null);

}

function aplicationContactExecution() {

    // console.clear();
    let optionUser;
    let showMessageReply = false;

    do {
        if (!showMessageReply) {
            console.log('%cMenu principal', dictionaryColors.titleMenu);
        } else {
            showMessageReply = !showMessageReply;
        }

        console.log('1 - Crear contacto\n2 - Modificar contacto\n3 - Mostrar contacto\n4 - Eliminar contacto\n5 - Salir de la aplicación (cancelar)');
        optionUser = prompt('Elija una de estas opciones');
        console.clear();

        switch (optionUser) {
            case '1':
                bridgeExecuteInstruction('Ingresar contacto', '1 - Ingresar nuevo contacto\n2 - Volver menú principal (Cancelar)', createContact); // Parametros


                break;

            case '2':
                bridgeExecuteInstruction('Modificar contacto', '1 - Modificar contacto\n2 - Volver menú principal (Cancelar)', modifyContact);

                break;

            case '3':
                bridgeExecuteInstruction('Mostrar contacto', '1 - Mostrar datos contacto\n2 - Mostrar todos los contactos\n3 - Volver menú principal (Cancelar)', [showDataContact, showAllContacts]);
                // bridgeExecuteInstruction('Mostrar contacto', '1 - Mostrar datos contacto\n2 - Volver menú principal (Cancelar)');

                break;

            case '4':
                bridgeExecuteInstruction('Eliminar contacto', '1 - Eliminar contacto\n2 - Volver menú principal (Cancelar)', removeContact);

                break;

            default:
                showMessageReply = true;

                if (optionUser === '') {
                    console.log('%cMenu principal', dictionaryColors.titleMenu);
                    console.log('%cNo has añadido nada cacho cabrón', dictionaryColors.messageError);
                } else if (optionUser !== '5' && optionUser !== null) {
                    console.log('%cMenu principal', dictionaryColors.titleMenu);
                    console.log('%cEl valor introducido no se encuentra dentro de las opciones', dictionaryColors.messageError);
                } else {
                    console.log('%cAplicación finalizada', dictionaryColors.messageError);
                }
                break;
        }

    } while (optionUser !== '5' && optionUser !== null);


}

button.addEventListener('click', aplicationContactExecution);









