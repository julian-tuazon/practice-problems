const { expect } = require('chai');
const { solveForExp } = require('../../edabit/solvingExpEquWithLog');

describe('solveForExp(a, b)', () => {
  context('b is 1', () => {
    it('should return 0', () => {
      expect(solveForExp(2343, 1)).to.equal(0);
      expect(solveForExp(9, 1)).to.equal(0);
      expect(solveForExp(64, 1)).to.equal(0);
    });
  });
  context('a raised to a certain power is equal to b', () => {
    it('should return the exponent value', () => {
      expect(solveForExp(2, 16)).to.equal(4);
      expect(solveForExp(10, 10000)).to.equal(4);
      expect(solveForExp(3, 27)).to.equal(3);
      expect(solveForExp(12, 144)).to.equal(2);
      expect(solveForExp(2, 128)).to.equal(7);
    });
  });
  context('a raised to a certain power cannot equal b', () => {
    it('should return "invalid"', () => {
      expect(solveForExp(3, 29)).to.equal('invalid');
      expect(solveForExp(4, 23)).to.equal('invalid');
      expect(solveForExp(6, 24)).to.equal('invalid');
    });
  });
});
