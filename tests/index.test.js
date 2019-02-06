const chai = require('chai');
const { inspect } = require('utils');

const compute = require('../src').default;

const { expect } = chai;
describe('NxN', () => {
  it('Example 2', () => {
    const exampleTwoNum = 4;

    const exampleTwoArray = [
      [1, 2, 3, 4],
      [4, -3, 2, 1],
      [7, -8, -9, 6],
      [6, 5, 4, 3]
    ];

    const expectedExampleTwoOutput = 12;

    console.log("Example 2");
    console.log(`input exampleTwoNum:${inspect(exampleTwoNum)}`);
    console.log(`input exampleTwoArray:${inspect(exampleTwoArray)}`);

    expect(compute(exampleTwoArray, exampleTwoNum)).to.equal(expectedExampleTwoOutput);
  });
});
