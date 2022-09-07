import map from '../App';

describe('sample describe', () => {
  it('smaple test', () => {
    const testInput = [
      ["*", ".", ".", "."],
      [".", ".", "*", "."],
      [".", ".", ".", "."],
    ];

    const expectedOutput = [
      ["*", "2", "1", "1"],
      ["1", "2", "*", "1"],
      ["0", "1", "1", "1"],
    ];

    expect(map(testInput)).toEqual(expectedOutput);
  });
});
