const { expect } = require('chai');
const { intWithinBounds } = require('../../edabit/integerInRange');

describe('.intWithinBounds()', () => {
  context('n is not an integer', () => {
    it('should return false', () => {
      expect(intWithinBounds(2.7, 1, 5)).to.equal(false);
    });
  });
  context('n is an integer less than lower', () => {
    it('should return false', () => {
      expect(intWithinBounds(1, 2, 5)).to.equal(false);
    });
  });
  context('n is an integer equal to lower', () => {
    it('should return true', () => {
      expect(intWithinBounds(3, 3, 5)).to.equal(true);
    });
  });
  context('n is an integer greater than upper', () => {
    it('should return false', () => {
      expect(intWithinBounds(7, 3, 5)).to.equal(false);
    });
  });
  context('n is an integer equal to upper', () => {
    it('should return false', () => {
      expect(intWithinBounds(5, 3, 5)).to.equal(false);
    });
  });
  context('n is an integer between lower and upper', () => {
    it('should return false', () => {
      expect(intWithinBounds(5, 3, 7)).to.equal(true);
    });
  });
});
