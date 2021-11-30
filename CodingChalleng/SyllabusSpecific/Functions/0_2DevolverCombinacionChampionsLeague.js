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
    grupoA: ["Man.city", "ParisSaintGermain", "Club Brujas", "RB Leipzig"],
    grupoB: ["Liverpool", "Porto", "Atletico de Madrid", "AC Milan:-)"],
    grupoC: ["Ajax", "Borusia Dortmund", "Spoting CP", "Besiktas"],
    grupoD: ["Real Madrid", "Inter", "sheriff", "Shakhtar Donetsk"],
    grupoE: ["Bayern Munich", "FC Barcelona:-)", "Benfica", "Dinamo de Kiev"],
    grupoF: ["Man.United", "Villareal", "Atalanta", "YoungBoys FC"],
    grupoG: ["Salzburgo FC", "LOSC", "Wolfsburg", "Sevilla"],
    grupoH: ["Juventus", "Chelsea", "Zenit", "Malmó"],
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


function devolverCombinacionChampionsLeague(objTeams) {

    let championsLeague = {};

    // Agregar grupos a la championsLeague
    let groups = Object.keys(objTeams);
    console.log({groups});

    for (let i = 0; i < groups.length; i++) {
        championsLeague[groups[i]] = {
            "equipos": objTeams[groups[i]],
            "partidos": {
                [objTeams[groups[i]][0]]:{},
                [objTeams[groups[i]][1]]:{},
                [objTeams[groups[i]][2]]:{},
                [objTeams[groups[i]][3]]:{}        
            } 
        };

    }

    console.log({ championsLeague })




    // Obtener combinaciones de idas y vueltas
    for (let i = 0; i < Object.keys(objTeams).length; i++) { // recorre cada grupo

        let teams = Object.values(objTeams)[i];

        console.log(Object.keys(objTeams)[i]);

        for (let j = 0; j < teams.length; j++) { // recorre cada equipo
            console.log("Idas y vueltas de: " + teams[j]);

            for (let k = 0; k < teams.length; k++) { // obtiene combinaciones por cada equipo
                if (teams[j] !== teams[k]) console.log(teams[k]);

            }
        }

        console.log("\n");

    }





}
devolverCombinacionChampionsLeague(gruposChampionsLeague);

function verificarAleatorio(grupo, numRandom, equipoLocal) {
    return (equipoLocal !== grupo[numRandom]) ? true : false
};

// Tienes que generar de forma aleatoria los números del array,( índices ) de 0 a 5
