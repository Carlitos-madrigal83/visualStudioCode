const button = document.querySelector('#init-program');

let dictionaryColors = {
    titleMenu: 'color:#118ab2', // color títulos secciones de ventanas
    dataList: 'color:#ffd166', // color de indices, carga información formato lista
    confirmationFinishProcess: 'color:#06d6a0', // confirmaciónes positivas de proceso realizado correctamente
    messageError: 'color:#ef476f',
    finishProgram: 'color:#ef476f'
}

function createContact(){

}

function modifyContact(){

}

function showDataContact(){

}

function showAllContacts(){

}

function removeContact(){

}

function bridgeExecuteInstruction(titleMenu, menu){ // Argumentos
    
    console.log('%c' + titleMenu, dictionaryColors.titleMenu);
    console.log(menu);
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
                bridgeExecuteInstruction('Modificar contacto');

                break;

            case '3':
                bridgeExecuteInstruction('Mostrar contacto');

                break;

            case '4':
                bridgeExecuteInstruction('Eliminar contacto');

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

