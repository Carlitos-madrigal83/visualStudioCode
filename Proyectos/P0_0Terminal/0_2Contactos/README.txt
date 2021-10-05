Crear una palicación para gestionar contactos.
La aplicación constará de un menú principal en el que se indicarán las diferentes opciónes que el usuario puede elegir del menú. El menú contará de cuatro opciones que son las siguientes.
  Menú principal:
  1 - Crear contacto
  2 - Modificar contacto
  3 - Mostrar contacto
  4 - Eliminar contacto
  5 - Salir de la aplicación

A continuación se desglosará cada uno de los apartados que deberán realizar:

--- Crear contacto ---
Esta opción le debe mostrar un submenú con dos opciones:
  Ingresar contacto
  1 - Ingresar nuevo contacto 
  2 - Volver menú principal (Cancelar)

Si elige 'Ingresar nuevo contacto', se le pedirá al usuario que introduzca un número obligatorio de datos del contacto  (cuatro datos; nombre, apellido, telefono y dni) y que en todas las peticiones le permita cancelar el proceso para volver
directamente al submenú.
  Ingresar contacto
  Cancelar - volver submenú

  Caso verdadero:
  (En caso de introducir el dato correctamente)
    Ingresar contacto
    <dato> correcto
    Cancelar - volver menú principal

  Caso falso:
  (En caso de introducir el dato incorrectamente)
    Ingresar contacto
    El valor introducido no es válido
    Cancelar - volver menú principal

Después de finalizar de introducir todos los datos correctamente se le preguntará si quiere guardar el contacto en la base de datos.
  Ingresar contacto
  dni correcto
  Aceptar - Guardar contacto 
  Cancelar - Volver <submenú>

  Caso verdadero:
  (Guardando el contacto)
    Ingresar contacto
    El contacto ha sido creado correctamente
    1 - Ingresar nuevo contacto 
    2 - Volver menú principal (Cancelar)

  Caso falso:
  (No guardando el contacto)
    Ingresar contacto
    Guardar contacto cancelado
    1 - Ingresar nuevo contacto 
    2 - Volver menú principal (Cancelar)


--- Modificar contacto ---
Esta opción le debe mostrar un submenú con dos opciones:
  Modificar contacto
  1 - Modificar contacto 
  2 - Volver menú principal (Cancelar)

Si elige 'Modificar contacto', primero se le pedirá que identifique el contacto del que quiere modificar los datos.
  Modificar contacto
  Cancelar - volver

  Caso verdadero:
  (En caso de elegir un contacto cuyo id exista)
    Modificar contacto
    Información del contacto
    Nombre: Ana
    Apellido: Martin
    Teléfono: 658985478
    Dni: 21547896F
    1 - Nombre
    2 - Apellido
    3 - Teléfono
    4 - Dni
    Cancelar - volver

    Casos verdaderos:
    (En cualquier caso verdadero se le mostrará un promp con el dato a modificar)
      Modificar contacto
      Modificando <dato> del contacto
      Cancelar - volver

      Caso verdadero:
      (En caso de introducir bien el dato se le devolverá al apartado anterior notificando de la modificación)
        Modificar contacto
        Información del contacto
        Nombre: Marta
        Apellido: Martin
        Teléfono: 658985478
        Dni: 21547896F
        El contacto ha sido modificado correctamente
        1 - Nombre
        2 - Apellido
        3 - Teléfono
        4 - Dni
        Cancelar - volver

      Caso falso:
      (En caso de introducir un valor erroneo se mostrará el error y se le seguir pidiendo el dato)
        Modificar contacto
        El valor introducido no es valido
        Cancelar - volver

    Caso falso:
    (En caso de generar un error se le seguirá mostrando el promp para que introduzca un nuevo valor)
    (En caso de introducir una opción no válida a modificar)
      Modificar contacto
      Información del contacto
      Nombre: Ana
      Apellido: Martin
      Teléfono: 658985478
      Dni: 21547896F
      El valor introducido no se encuentra dentro de las opciones
      1 - Nombre
      2 - Apellido
      3 - Teléfono
      4 - Dni
      Cancelar - volver <proceso anterior>

  Caso falso:
  (En caso de generar un error se le seguirá mostrando el promp para que introduzca un nuevo valor)
  (En caso de no introducir un id válido o cualquier otro dato no válido)
    Modificar contacto
    El id introducido no es correcto
    Cancelar - volver <submenú>




--- Mostrar contacto ---
Esta opción le debe mostrar un submenú con tres opciones:
  Mostrar información
  1 - Mostrar datos contacto 
  2 - Mostrar todos los contactos 
  3 - Volver menú principal (Cancelar)


Si elige 'Mostrar datos contacto', se le debe pedir que indentifique el contacto por el dni del que quiere mostrar la información.
  Mostrar información
  Cancelar - Volver

  Caso verdadero:
  (En caso de elegir un contacto cuyo id exista)
    Mostrar información
    Mostrando información del contacto
    Nombre: Ana
    Apellido: Martin
    Teléfono: 658985478
    Dni: 21547896F
    Ok - Introducir nuevo dni 
    Cancelar - Volver <submenú>
  
  Casos falsos:
  (Se mantendrá el promp pidiendo un dni en todos los casos de error)
    Caso 1:
      (En caso de introducir un valor no válido)
      Mostrar información
      No ha introducido un dni válido
      Cancelar - volver <submenú>

    Caso 2:
    (En caso de no introducir un valor)
      Mostrar información
      No ha introducido ningún valor
      Cancelar - volver <submenú>

    Caso 3:
    (En caso de introducir un dni que no existe en la base de datos)
      Mostrar información
      El contacto con dni <dni> no existe en la base de datos
      Cancelar - volver <submenú>

Si elige "Mostrar todos los contactos" se le mostrará todos los contactos:

  Caso verdadero:
  (Se le mostrará un alert para que vuelva al submenú)
    Mostrar información
    Mostrando información de contactos
    ------------------------------------------------------
    Nombre: Ana
    Apellido: Martin
    Teléfono: 658985478
    Dni: 21547896F
    ------------------------------------------------------
    Nombre: Carlos
    Apellido: Fernandez
    Teléfono: 458789658
    Dni: 25685698A
    ------------------------------------------------------
    Nombre: Angel
    Apellido: Viñas
    Teléfono: 215478965
    Dni: 25478965S




--- Eliminar contacto ---
Esta opción le debe mostrar un submenú con dos opciones:
  Eliminar contacto
  1 - Eliminar contacto 
  2 - Volver menú principal (Cancelar)

Si elige 'Eliminar contacto', se le debe pedir que indentifique el contacto por el dni.
  Eliminar contacto
  Cancelar - volver

  Caso verdadero:
  (En caso de elegir un contacto cuyo dni exista)
    Eliminar contacto
    Nombre: Angel
    Apellido: Viñas
    Teléfono: 215478965
    Dni: 25478965S
    Aceptar - eliminar contacto, Cancelar - volver <submenú>

      Caso verdadero:
      (Si pulsa "Aceptar" se le devolverá al submenú indicando la resolución de la operación)
        Eliminar contacto
        El contacto con dni <dni> ha sido eliminado correctamente
        1 - Eliminar contacto 
        2 - Volver menú principal (Cancelar)

      Caso falso: 
      (Si pulsa "Cancelar" se le devolverá al proceso anterior (introducir dni) indicando la resolución de la operación)
        Eliminar contacto
        Eliminar contacto cancelado
        Cancelar - volver <submenú>

  Casos falsos:
  (Se mantendrá el promp pidiendo un dni en todos los casos de error)
    Caso 1:
      (En caso de introducir un valor no válido)
      Eliminar contacto
      No ha introducido un dni válido
      Cancelar - volver <submenú>

    Caso 2:
    (En caso de no introducir un valor)
      Eliminar contacto
      No ha introducido ningún valor
      Cancelar - volver <submenú>

    Caso 3:
    (En caso de introducir un dni que no existe en la base de datos)
      Eliminar contacto
      El contacto con dni 42565891F no existe en la base de datos
      Cancelar - volver <submenú>

Puntos Que Cumplir
Se deberán verificar todos los datos introducidos por el usuario.
Se incluirán los mensajes necesarios que veamos importantes para complementar la aplicación y que está tenga un facil uso.
Toda la aplicación debe de ser manejada sin conocimientos previos.
Los pasos a pasos para mostrar nueva información en la consola deben ser limpiados los datos anteriores de la consola para mostrar los siguientes en una ventana en limpio.
Se procederá a la optimización de código necesario que se vea posible aplicar.