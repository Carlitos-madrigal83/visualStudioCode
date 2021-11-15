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
// Tener en cuenta que no puede un equipo competir contra si mismo. (verificarAleatorio())
// Verificar que no se repiten equipos en el array. (verificarEquiposNoRepetidos())

// Funciones extra
// - mapearArray() -> encargada de eliminar los equipos que ya han competido

let teams = ["Real Madrid", "FC Barcelona", "Liverpool", "Manchester City", "Atlético de Madrid", "Sevilla CF", "Juventus", "Bayern de Munich"];

function devolverCombinacionChampionsLeague(arrTeams) {
    let teamsRandom = Math.round(Math.random() * (arrTeams.length - 1));
    for (let i = 0; i < teams.length; i++) {
        let partidos =
            console.log(teams[i] + " vs " + teams[i]);

    }
    console.log(teamsRandom);
    console.log(arrTeams[teamsRandom] + " VS " + arrTeams[teamsRandom]);
}
devolverCombinacionChampionsLeague(teams);

    // Tienes que generar de forma aleatoria los números del array,( índices ) de 0 a 5
