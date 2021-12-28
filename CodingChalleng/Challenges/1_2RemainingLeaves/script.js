const width = 4;
const height = 4;
const winds = 'RR';
const leaves = [
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [0, 1, 1, 1],
  [0, 2, 3, 0],
];

function capturingPositionsAndValues(leaves) {
    const posLeaves = [];

    for (let i = 0; i < leaves.length; i++) { // filas
      console.log(leaves[i]);

      for (let j = 0; j < leaves[i].length; j++) {
        //console.log(leaves[i][j]);
        if(leaves[i][j] > 0){
          posLeaves.push([i, j, leaves[i][j]])
        }
      }
    }
    return posLeaves;
};

function applingMovementsLeaves(posLeaves, winds) {
  posLeaves = JSON.parse(JSON.stringify(posLeaves));

    for (let i = 0; i < posLeaves.length; i++) {

        for (let j = 0; j < winds.length; j++) {
          if (winds[j] === 'R' || winds[j] === 'L') {// Columna
            
            if (winds[j] === 'R') {
              posLeaves[i][1] = posLeaves[i][1] + 1;
            }else if(winds[j] === 'L'){
              posLeaves[i][1] = posLeaves[i][1] - 1; 
            }

          }else if(winds[j] === 'U' || winds[j] === 'D'){// Fila
            
            if (winds[j] === 'U') {
              posLeaves[i][0] = posLeaves[i][0] - 1;
            }else if(winds[j] === 'D'){
              posLeaves[i][0] = posLeaves[i][0] + 1;
            }
          }
        }
      //posLeaves[i]
      // [1, 2, 2]
      // ( R ) -> [1, 3, 2] -> fila?columna, +1?-1
      // ( R ) -> [1, 4, 2] -> fila?columna, +1?-1
      // ( D ) -> [2, 4, 2] -> fila?columna, +1?-1
    }
    return posLeaves;
};

function restoreLeaves(modifyPosLeaves, leaves){
  leaves = JSON.parse(JSON.stringify(leaves));

  for (let i = 0; i < leaves.length; i++) {
    
    for (let j = 0; j < leaves[i].length; j++) {
      let valueFind = false;
      console.log(leaves[i][j], "( " + i + ", " + j + " )");

      for (let k = 0; k < modifyPosLeaves.length; k++) {
        if (!valueFind && i === modifyPosLeaves[k][0] && j === modifyPosLeaves[k][1]) {
          leaves[i][j] = modifyPosLeaves[k][2];
          valueFind = true;
        }else if(!valueFind){
          leaves[i][j] = 0;
        }
      }
    }
  }

  return leaves;
}

function countLeaves(leavesRestore) {
  let suma = 0;
    for (let i = 0; i < leavesRestore.length; i++) {

      for (let j = 0; j < leavesRestore[i].length; j++) {
        suma += leavesRestore[i][j];
      }
    }
  return suma;
}

function main(width, height, leaves, winds) {
  console.log(width);   
  console.log(height);   
  console.log(leaves);   
  console.log(winds);  
  
  const posLeaves = capturingPositionsAndValues(leaves);
  console.log({posLeaves});
  console.log(typeof posLeaves);

  const modifyPosLeaves = applingMovementsLeaves(posLeaves, winds);
  console.log({modifyPosLeaves})

  const leavesRestore = restoreLeaves(modifyPosLeaves, leaves);
  console.log({leavesRestore});

  const numLeaves = countLeaves(leavesRestore);
  console.log({numLeaves});

}
main(width, height, leaves, winds);

