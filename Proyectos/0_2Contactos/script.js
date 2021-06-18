const button = document.querySelector('#init-program');

let dictionaryColors = {
    titleMenu: 'color:#118ab2', // color títulos secciones de ventanas
    dataList: 'color:#ffd166', // color de indices, carga información formato lista
    confirmationFinishProcess: 'color:#06d6a0', // confirmaciónes positivas de proceso realizado correctamente
    messageError: 'color:#ef476f',
    finishProgram: 'color:#ef476f'
}

function aplicationContactExecution() {



    // console.clear();
    let optionUser;

    do {
        console.log('%cMenu principal', dictionaryColors.titleMenu);
        console.log('1 - Crear contacto \n2 - Modificar contacto \n3 - Mostrar contacto \n4 - Eliminar contacto \n5 - Salir de la aplicación (cancelar)');
        optionUser = prompt('Elija una de estas opciones');

        switch (optionUser) {
            case '1':
                console.log('Cargando crear contacto');

                break;

            case '2':
                console.log('Cargando modificar contacto');

                break;

            case '3':
                console.log('Cargando mostrar contacto');

                break;

            case '4':
                console.log('Cargando eliminar contacto');

                break;

            default:

                if (optionUser === '') {
                    console.log('%cNo has añadido nada cacho cabrón', dictionaryColors.messageError);
                } else if (optionUser !== '5' && optionUser !== null) {
                    console.log('%cEl valor introducido no se encuentra dentro de las opciones', dictionaryColors.messageError);
                } else {
                    console.log('%cAplicación finalizada', dictionaryColors.messageError);
                }
                break;
        }

    } while (optionUser !== '5' && optionUser !== null);


}

button.addEventListener('click', aplicationContactExecution);

