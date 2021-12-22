const width = 4;
const height = 4;
const winds = 'RRD';
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

};

/*
posLeaves = [
  [leaves[i], leaves[i][j], leaves[i][j]],
  [1, 2, 2],
  [2, 1, 1],
  [2, 2, 1],
  ...,
]
*/

function main(width, height, leaves, winds) {
  console.log(width);   
  console.log(height);   
  console.log(leaves);   
  console.log(winds);  

  const posLeaves = capturingPositionsAndValues(leaves);
  console.log({posLeaves});
  
  const modifyPosLeaves = applingMovementsLeaves(posLeaves, winds);
}
main(width, height, leaves, winds);

