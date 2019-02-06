const chai = require('chai');
const { inspect } = require('util');

const compute = require('../src').default;

const { expect } = chai;
describe('NxN Function Test', () => {
  it('Example 1 should equal -4', () => {

    /**
    Input :
    4
    followed by:
    1 2 3 4
    4 3 2 1
    7 8 9 6
    6 5 4 3
    Output : -4

    Principal Diagonal (Right to left): 16
    Secondary Diagonal (Left to Right): 20
    Diff: 16 - 20 = -4
    **/
    const exampleOneNum = 4;

    const exampleOneArray = [
      [1, 2, 3, 4],
      [4, 3, 2, 1],
      [7, 8, 9, 6],
      [6, 5, 4, 3]
    ];

    const expectedExampleOneOutput = -4;

    console.log("Example 1\n");
    console.log(`input exampleOneNum:${inspect(exampleOneNum)}\n`);
    console.log(`input exampleOneArray:${inspect(exampleOneArray)}\n`);

    expect(compute(exampleOneArray, exampleOneNum)).to.equal(expectedExampleOneOutput);
  });
  it('Example 2 should equal -12', () => {
    const exampleTwoNum = 4;

    const exampleTwoArray = [
      [1, 2, 3, 4],
      [4, -3, 2, 1],
      [7, -8, -9, 6],
      [6, 5, 4, 3]
    ];

    const expectedExampleTwoOutput = -12;

    console.log("Example 2\n");
    console.log(`input exampleTwoNum:${inspect(exampleTwoNum)}\n`);
    console.log(`input exampleTwoArray:${inspect(exampleTwoArray)}\n`);

    expect(compute(exampleTwoArray, exampleTwoNum)).to.equal(expectedExampleTwoOutput);
  });
});
