// /* ACALTCUR

// TODO OPERADOR NECESITA DE DOS OPERANDOS PARA OPERAR, MENOS EL UNARIO

// -> Operadores de asignación

// (=)

// Operadores compuestos de asignación
// (+=) edad += 1

// += | -= | *= | /= | %=



// -> Operadores de comparación
// == -> igualdad debil
// === -> igualdad fuerte
// != -> desigualdad debil / disitinto a 
// !== -> desigualdad fuerte / distinto a
// <> -> desigualdad debil / distinto a 
// > -> mayor que
// < -> menor que
// >= -> mayor o igual que
// <= -> menor o igual que


// -> Operadores aritméticos
// + | - | * | / | % | ** |

//     Operadores unarios aritméticos
//         Sufijo / postincremento
//             ++ -> incremento | i++
//         Prefijo / preincremento
//             ++ -> incremento | ++i
//     -- -> decremento | i--
//         Sufijo / postdecremento
//             -- -> decremento | i--
//         Prefijo / predecremento
//             -- -> decremento | --i

//     Negación unario (-) ->

//     Positivo unario (+) -> convertir el operando en un núemro, si aún no lo es.


//     // Operadores logicos
//         && -> AND - Y
//             true && true -> true
//             true && false -> false
//             false && true -> false
//             false && false -> false

//         || -> OR - O
//             true && true -> true
//             true && false -> true
//             false && true -> true
//             false && false -> false

//             Juan, el coche fue reparado o no llueve vamos a tomar una pinta.


//             aprobarExamen y nota > 8

//         ! -> negación
//             !true -> false
//             !false -> true

//         !! -> conversión boolean de una expresión


//     Operador de concatenación de cadena (+)
// */

// let i = 3;
// console.log('i: ' + i);

// let x = i++;


// console.log('x: ' + x);
// console.log('x: ', -x);
// console.log('x: ', -(+'3' + 5));
// console.log('i: ' + i);


// let cocheReparado = false;
// let noLlueve = "voy a salir en la consola porque soy un texto y mi resultado es 
//verdadero pero nunca sale el true, si no salgo yo";

// let miObjeto = {
//      numero: 5
// }

// console.log("Resultado operación logica: ", Boolean(cocheReparado || noLlueve));

// salirJuego = false;

// // while(!salirJuego){

// // }

// let fumador = false;

// if(!fumador){
//     console.log('Genial porque no fumes'); 
// }

// console.log(!!{});
// console.log(Boolean(""));


// let myArray = [5];


// if(myArray.length){
//     console.log('Array con valores');
// }else{
//     console.log('Array vacio');
// }


// Paso por valor

// let a = 2;
// console.log('a:', a);

// let b = a; // Paso por valor
// console.log('b:', b);

// a = 12;
// console.log('a:', a);
// console.log('b:', b);


// let x = [1, 9];
// console.log('x:', x);

// let y = x; // Paso por referencia
// console.log('y:', y);

// y[0] = 8;
// console.log('x:', x);
// console.log('y:', y);

// let u = {
//     nombre: 'Pedro'
// }
// console.log('u:', u);

// let e = u;
// console.log('e:', e);

// e.nombre = 'Maria';

// console.log('u:', u);
// console.log('e:', e);
// // Paso por referencia

// // if

// // if(condicion) {
// //     // instrucciones
// // } else if(){

// // }else if(){

// // }

// // switch
// let num = 3;

// switch(num){
//     case 1:
//         console.log('Uno');
//         break;
//     case 2:
//         console.log('Dos');
//         break;
//     default:
//         console.log('No es uno, ni dos');
// }


// // for (let i = 0; i != array.length; i++) { // se sabe el número de repeticiones

    
// // }

// // let salir;
// // console.log('¿Quieres dar una vuelta?');
// // console.log('1 - Dar una vuelta mas');
// // console.log('0 - Salir');

// // let optionUser = prompt('Elige una de las opciones');

// // while(optionUser !== '0'){ // cuando no se sabe el número de repeticiones

// //     console.log('¿Quieres dar una vuelta mas?');
// //     console.log('1 - Dar una vuelta mas');
// //     console.log('0 - Salir');

// //     optionUser = prompt('Elige una de las opciones');
// }



// do {


//     console.log('¿Quieres dar una vuelta?');
//     console.log('1 - Dar una vuelta mas');
//     console.log('0 - Salir');

//     optionUser = prompt('Elige una de las opciones');

    
// } while (optionUser !== null);

function miFuncion2() {

    let a = 2000;
    console.log('a: ', a);
}
// Funciones, bloques de código que se ejcutan al ser llamados
function miFuncion(a, b) { // Argumentos
    // ámbito local o ámbito de función
    
 
    
    miFuncion2();
    return a + b;
}

// console.log(a);


console.log('Resultado suma: ', miFuncion(2, 6)); // Parámetros
