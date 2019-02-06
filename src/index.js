
/**
 *
 * Find difference between sums of two diagonals
 * @param {array} twoDimensionalArray - a two dimensional array
 * @param {int}  number
 */
function compute(twoDimensionalArray, number) {
    // initialize sums of diagonals
    let diagValue1 = 0
    let diagValue2 = 0;

    for (let i = 0; i < number; i++) {
      for (let j = 0; j < number; j++) {
        // finding sum of primary diagonal
        if (i == j) {
          diagValue1 += twoDimensionalArray[i][j];
        }

        // finding sum of secondary diagonal
        if (i == number - j - 1) {
          diagValue2 += twoDimensionalArray[i][j];
        }
      }
    }

    // Absolute difference of the sums
    // across the diagonals
    return Math.abs(diagValue1 - diagValue2);
}

module.exports.default = compute;
