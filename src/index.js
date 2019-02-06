
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

const exampleTwoNum = 4;

const exampleTwoArray = [
  [1, 2, 3, 4],
  [4, -3, 2, 1],
  [7, -8, -9, 6],
  [6, 5, 4, 3]
];

console.log("Example 2");
console.log(`input exampleTwoNum:${exampleTwoNum}`);
console.log(`input exampleTwoArray:${exampleTwoArray}`);
console.log(compute(exampleTwoArray, exampleTwoNum));
