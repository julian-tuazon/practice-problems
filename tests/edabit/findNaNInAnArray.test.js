const { expect } = require('chai');
const { findNaN } = require('../../edabit/findNaNInAnArray');

describe('findNaN(number)', () => {
  context('number array is empty', () => {
    it('should return -1', () => {
      expect(findNaN([])).to.equal(-1);
    });
  });
  context('number array has no NaN values', () => {
    it('should return -1', () => {
      expect(findNaN([2, 5, 23])).to.equal(-1);
    });
  });
  context('NaN is at index 0 of number array', () => {
    it('should return 0', () => {
      expect(findNaN([NaN, 2, 5, 23])).to.equal(0);
    });
  });
  context('NaN is at index 2 of number array', () => {
    it('should return 0', () => {
      expect(findNaN([243, 234234223, NaN, 2, 5, 23])).to.equal(2);
    });
  });
  context('NaN is at index 4 of number array', () => {
    it('should return 0', () => {
      expect(findNaN([243, 234234223, 11, 9, NaN, 2, 5, 23])).to.equal(4);
    });
  });
});
