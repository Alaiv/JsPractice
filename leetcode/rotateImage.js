var rotate = function(matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix)

console.log(matrix)