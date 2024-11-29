'use strict';

const max = (matrix) => {
  let maxInMatrix = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] > maxInMatrix) {
        maxInMatrix = matrix[i][j];
      }
    }
  }
  return maxInMatrix;
};

module.exports = { max };
