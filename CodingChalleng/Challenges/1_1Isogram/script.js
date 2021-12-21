function isIsogram(str) {
    let caracter;
    let isIsogram = true;

    if(str && str.length > 1){

        for (let i = 0; i < str.length - 1; i++) {
            
            caracter = str[i];
    
            for (let j = i + 1; j < str.length; j++) {
                if (caracter.toLowerCase() === str[j].toLowerCase()) {
                    isIsogram = false;
                }
            }
    
        }
    } else if(str && str.length === 1){
        isIsogram = false;
    }
    
    return isIsogram;
}

console.log(isIsogram('Penelope'));


// 1º
// Cojo el 1º caracter 'P'
// Recorro el string comprobando que ese caracter no se repite 'enelope'

// 2º
// Cojo el 2º caracter 'e'
// Recorro el string comprobando que ese caracter no se repite 'nelope'

// 1º
// i -> 0
// j -> 1
// caracter -> P


// 2º
// i -> 1
// j -> 2
// caracter -> e

// 3º
// i -> 2
// j -> 3
// caracter -> n

// 4º
// i -> 3
// j -> 4
// caracter -> e

// 5º
// i -> 4
// j -> 5
// caracter -> l

// 6º
// i -> 5
// j -> 6
// caracter -> o

// 7º
// i -> 6
// j -> 7
// caracter -> p

// 8º
// i -> 7
// j -> 8
// caracter -> e


