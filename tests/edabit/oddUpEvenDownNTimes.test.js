const { expect } = require('chai');
const { evenOddTransform } = require('../../edabit/oddUpEvenDownNTimes');

describe('evenOddTransform(arr)', () => {
  context('arr is empty', () => {
    it('should return an empty array', () => {
      expect(evenOddTransform([], 2)).to.deep.equal([]);
    });
  });
  context('n is 0', () => {
    it('should return same array', () => {
      expect(evenOddTransform([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    });
  });
  context('array has some 0 values', () => {
    it('should treat 0 as an even number', () => {
      expect(evenOddTransform([1, 0, 2], 1)).to.deep.equal([3, -2, 0]);
    });
  });
  context('array has some nonzero values and n is nonzero integer', () => {
    it('should add 2 to odd numbers and add -2 to even numbers for each n', () => {
      expect(evenOddTransform([5, 1, 4], 3)).to.deep.equal([11, 7, -2]);
      expect(evenOddTransform([220, 17, 6], 20)).to.deep.equal([180, 57, -34]);
      expect(evenOddTransform([35, 17, 2], 100)).to.deep.equal([235, 217, -198]);
    });
  });
});
