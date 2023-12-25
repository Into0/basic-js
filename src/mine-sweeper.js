const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const result = Array(row).fill().map(() => Array(col).fill(0));

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (matrix[i][j] !== true) continue;

      const directions = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

      for (const direction of directions) {
        const newRow = i + direction[0];
        const newCol = j + direction[1];

        if (newRow >= 0 && newRow < row && newCol >= 0 && newCol < col) {
          result[newRow][newCol] += 1;
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
