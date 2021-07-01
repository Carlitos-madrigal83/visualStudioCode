const button = document.querySelector('#init-program');

let dictionaryColors = {
    titleMenu: 'color:#118ab2', // color títulos secciones de ventanas
    dataList: 'color:#ffd166', // color de indices, carga información formato lista
    confirmationFinishProcess: 'color:#06d6a0', // confirmaciónes positivas de proceso realizado correctamente
    messageError: 'color:#ef476f',
    finishProgram: 'color:#ef476f'
}

function createContact() {

}

function modifyContact() {

}

function showDataContact() {

}

function showAllContacts() {

}

function removeContact() {
    urls = 'https:www.google.es,https:www.wikipedia.lugares.com,https:www.seriesYonkies.Spiderman.HomeComic.es';
    arrayUrls = urls.split(',');

    console.time();
    for (let i = 0; i < arrayUrls.length; i++) {

        let urlDividida = arrayUrls[i].split('.');

        console.log(urlDividida);

        if (urlDividida[urlDividida.length - 1] === 'es') {
            console.log(arrayUrls[i]);
        }

    }
    console.timeEnd();

}

removeContact();



function bridgeExecuteInstruction(titleMenu, menu) { // Argumentos

    let optionUser;
    let tituloMenuMostrado = false;
    let optionExit = menu.split('\n')[menu.split('\n').length - 1][0]; // 2 - Volver menú principal (Cancelar)

    do {
        if (!tituloMenuMostrado) {
            console.log('%c' + titleMenu, dictionaryColors.titleMenu);

        } else {
            tituloMenuMostrado = false;
        }

        console.log(menu);

        optionUser = prompt('Elija una de estas 2 opciones');
        console.clear();

        switch (optionUser) {
            case '1':
                console.log(menu.split('\n')[0]);

                break;
            case optionExit:
                console.log('2 - Volver menú principal (Cancelar)');

                break;

            default:
                console.log('%c' + titleMenu, dictionaryColors.titleMenu);
                console.log('%cEl valor introducido no es válido', dictionaryColors.messageError);

                tituloMenuMostrado = true;

                break;
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
                bridgeExecuteInstruction('Ingresar contacto', '1 - Ingresar nuevo contacto\n2 - Volver menú principal (Cancelar)'); // Parametros


                break;

            case '2':
                bridgeExecuteInstruction('Modificar contacto', '1 - Modificar contacto\n2 - Volver menú principal (Cancelar)');

                break;

            case '3':
                bridgeExecuteInstruction('Mostrar contacto', '1 - Mostrar datos contacto\n2 - Mostrar todos los contactos\n3 - Volver menú principal (Cancelar)');
                // bridgeExecuteInstruction('Mostrar contacto', '1 - Mostrar datos contacto\n2 - Volver menú principal (Cancelar)');

                break;

            case '4':
                bridgeExecuteInstruction('Eliminar contacto', '1 - Eliminar contacto\n2 - Volver menú principal (Cancelar)');

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

