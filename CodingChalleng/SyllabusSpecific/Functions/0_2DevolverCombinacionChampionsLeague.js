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
    grupoA: ["Man. City", "Paris Saint Germain", "Club Brujas", "RB Leipzig"],
    grupoB: ["Liverpool", "Oporto", "Atletico de Madrid", "AC Milan"],
    grupoC: ["Ajax", "Borusia Dortmund", "Sporting CP", "Besiktas"],
    grupoD: ["Real Madrid", "Inter", "Sheriff", "Shakhtar Donetsk"],
    grupoE: ["Bayern Munich", "FC Barcelona", "Benfica", "Dinamo de Kiev"],
    grupoF: ["Man. United", "Villareal", "Atalanta", "YoungBoys FC"],
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
function eliminarEspacios(str) {
    return str.split(' ').join('_');
}

function cargarEquipos(objTeams, groups, i) {

    let obj = {};
    for (let j = 0; j < objTeams[groups[i]].length; j++) {
        obj[eliminarEspacios(objTeams[groups[i]][j])] = {};
    }
    return obj;
}

const obtenerResultadoPartidos = function (equipoLocal, equiposVisitantes) {
    let obj = {};
    for (let i = 0; i < equiposVisitantes.length; i++) {
        if (eliminarEspacios(equiposVisitantes[i]) !== equipoLocal) {
            obj[equiposVisitantes[i]] = null;
        }
    }

    return obj;
}

function devolverCombinacionChampionsLeague(objTeams) {
    let championsLeague = {};

    // Agregar grupos a la championsLeague
    let groups = Object.keys(objTeams);
    //console.log({ groups });

    // Agregar los equipos por gurpo
    for (let i = 0; i < groups.length; i++) {
        championsLeague[groups[i]] = {
            "equipos": objTeams[groups[i]],
            "partidos": cargarEquipos(objTeams, groups, i)
        };
    }

    // Agregar idas y vueltas por equipo
    for (let i = 0; i < groups.length; i++) {
        let objs = Object.values(championsLeague[groups[i]].partidos);
        for (let j = 0; j < objs.length; j++) {
            objs[j].idas = null;
            objs[j].vueltas = null;
        }
    }

    // Agregar partidos idas y vueltas con resultados
    for (let i = 0; i < groups.length; i++) {
        
        let grupo = championsLeague[groups[i]];
        console.log({grupo});
        let idasVueltasEquipo = Object.values(grupo.partidos);
        console.log({idasVueltasEquipo});

        for (let j = 0; j < idasVueltasEquipo.length; j++) {
            idasVueltasEquipo[j].idas = obtenerResultadoPartidos(Object.keys(grupo.partidos)[j], grupo.equipos);
            idasVueltasEquipo[j].vueltas = obtenerResultadoPartidos(Object.keys(grupo.partidos)[j], grupo.equipos);
        }
    }

    console.log({ championsLeague });
}
devolverCombinacionChampionsLeague(gruposChampionsLeague);

function verificarAleatorio(grupo, numRandom, equipoLocal) {
    return (equipoLocal !== grupo[numRandom]) ? true : false
};

// Tienes que generar de forma aleatoria los números del array,( índices ) de 0 a 5


// E S Q U E M A 

// Número de jornadas en fase de grupos - 6 -

// Jornada 1 (ida)

// -- Local --------- Visitante
// Man. City -- vs -- Paris Saint Germain
// Club Brujas -- vs -- RB Leipzig

// Jornada 2 (ida)

// -- Local --------- Visitante
// RB Leipzig -- vs -- Man. City
// Paris Saint Germain -- vs -- Club Brujas

// Jornada 3 (ida)

// -- Local --------- Visitante
// Man. City -- vs -- Club Brujas
// RB Leipzig -- vs -- Paris Saint Germain

// Jornada 4 (vuelta)

// -- Local --------- Visitante
// Club Brujas -- vs -- Man. City
// Paris Saint Germain -- vs -- RB Leipzig

// Jornada 5 (vuelta)

// -- Local --------- Visitante
// Paris Saint Germain -- vs -- Man. City 
// RB Leipzig -- vs -- Club Brujas

// Jornada 6 (vuelta)

// -- Local --------- Visitante
// Man. City -- vs -- RB Leipzig
// Club Brujas -- vs -- Paris Saint Germain