const { expect } = require('chai');
const { reverseImage } = require('../../edabit/negativeImage');

describe('reverseImage(image)', () => {
  context('image array is empty', () => {
    it('should return an empty array', () => {
      expect(reverseImage([])).to.deep.equal([]);
    });
  });
  context('image array contains arrays of 0, 1 values', () => {
    it('should return 2D array with 0 replaced with 1 and vice versa', () => {
      expect(reverseImage([
        [0, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
      ])).to.deep.equal([
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]);
      expect(reverseImage([
        [0, 1, 1],
        [0, 0, 0],
        [1, 1, 0]
      ])).to.deep.equal([
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
      ]);
      expect(reverseImage([
        [0, 1],
        [0, 1, 0],
        [1, 1, 0, 0]
      ])).to.deep.equal([
        [1, 0],
        [1, 0, 1],
        [0, 0, 1, 1]
      ]);
    });
  });
});
