// Crear un array con los equipos que compiten en la ChampionsLeague. Generar una función llamada
// devolverCombinacionChampionsLeague() autoejecuta, encargada
// de generar la tabla de competiciones entre equipos (uno contra uno). // 10 equipos -> 5 partidos.
// El array debe por cada partido 

// ["Real Madrid", "FC Barcelona", "Liverpool", "Manchester City"];
// Números aleatorios: 0 y 3 -> "Real Madrid" contra "Manchester City"
// ["FC Barcelona", "Liverpool"];
// Números aleatorios: 0 y 1 -> "FC Barcelona" contra "Liverpool"

// C O N S O L A --->
// Equipos por jugar: Real Madrid - FC Barcelona - Liverpool - Manchester City
// Partido 1º: Real Madrid VS Liverpool

// Equipos por jugar: FC Barcelona - Manchester City
// Partido 2º: FC Barcelona VS Manchester City

// Excepciones:
// Tener en cuenta que no puede un equipo competir contra si mismo y ninguno ya agregado
// a la competición contra el local. (verificarAleatorio())
// Verificar que no se repiten equipos en el array. (verificarEquiposNoRepetidos())

// Funciones extra
// - mapearArray() -> encargada de eliminar los equipos que ya han competido

let gruposChampionsLeague = {
    "grupoA": ["Real Madrid", "FC Barcelona", "Liverpool", "Manchester City"],
    "grupoB": ["2", "2", "2", "2"],
    "grupoC": ["3", "3", "3", "3"],
};
//"Atlético de Madrid", "Sevilla CF", "Juventus", "Bayern de Munich"];


/*

    championsLeague = {
        grupoA: {
            "equipos": ["Real Madrid", "FC Barcelona", "Liverpool", "Manchester City"],
            "partidos": {
                "Real Madrid": {
                    ida: {
                        "FC Barcelona": 1-5,
                        "Liverpool": 2-4,
                        "Manchester City": 3-0
                    },
                    vuelta: {
                        "FC Barcelona": 2-6,
                        "Liverpool": 2-1,
                        "Manchester City": 2-0
                    }
    
                },
                "FC Barcelona": {
                    ida: {
                        "Real Madrid": 2-6,
                        "Liverpool": -,
                        "Manchester City": -
                    },
                    vuelta: {
                        "Real Madrid": 1-5,
                        "Liverpool": -,
                        "Manchester City": -
                    }
                },
                "Liverpool": {
                    ida: {
                        "Real Madrid": 2-1,
                        "FC Barcelona": -,
                        "Manchester City": -
                    },
                    vuelta: {
                        "Real Madrid": 2-4,
                        "FC Barcelona": -,
                        "Manchester City": -
                    }
                },
                "Manchester City": {
                    ida: {
                        "Real Madrid": 2-0,
                        "FC Barcelona": -,
                        "Liverpool": -
                    },
                    vuelta: {
                        "Real Madrid": 3-0,
                        "FC Barcelona": -,
                        "Liverpool": -
                    }
                }
            }
        },
        grupoB: {...},
        grupoC: {...},
        ...
        grupoH: {...}
    }
*/


function devolverCombinacionChampionsLeague(arrTeams) {
<<<<<<< HEAD

    const championsLeague = {};

    let grupos = Object.keys(gruposChampionsLeague);
    for (let i = 0; i < grupos.length; i++) {
        championsLeague[grupos[i]] = {
            "equipos": [],
            "partidos": {}
        };
=======
    let teamsRandom = Math.round(Math.random() * (arrTeams.length - 1));
    for (let i = 0; i < teams.length; i++) {
        let equipo1 = teams[i];
        console.log(teams[i] + " vs " + teams[i]);
        for (let j = 0; j < teams.length; j++) {
            let equipo2 = teams[j];
            console.log(teams[j] + " vs " + teams[i]);
        }
>>>>>>> 20ec73cb9a37187644edc5be3631e61e73c98dde
    }











    console.log({ championsLeague });
    /*let partidos = 3;





    do {
        let teamsRandom = Math.trunc(Math.random() * arrTeams.length);
        let

        if (verificarAleatorio(arrTeams, teamsRandom, arrTeams[0])) {
            console.log(arrTeams[0] + " vs " + arrTeams[teamsRandom]);
            partidos--;
        }

    } while (partidos > 0);*/

}
devolverCombinacionChampionsLeague(gruposChampionsLeague);

function verificarAleatorio(grupo, numRandom, equipoLocal) {
    return (equipoLocal !== grupo[numRandom]) ? true : false
};

<<<<<<< HEAD
=======
// Tienes que generar de forma aleatoria los números del array,( índices ) de 0 a 5
>>>>>>> 20ec73cb9a37187644edc5be3631e61e73c98dde
