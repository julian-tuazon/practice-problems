const { expect } = require('chai');
const { factorGroup } = require('../../edabit/evenOrOddNumOfFactors');

describe('factorGroup(num)', () => {
  context('num has an even num of factors', () => {
    it('should return "even"', () => {
      expect(factorGroup(6)).to.equal('even');
      expect(factorGroup(15)).to.equal('even');
      expect(factorGroup(8)).to.equal('even');
    });
  });
  context('num has an odd num of factors', () => {
    it('should return "odd"', () => {
      expect(factorGroup(4)).to.equal('odd');
      expect(factorGroup(16)).to.equal('odd');
      expect(factorGroup(36)).to.equal('odd');
    });
  });
  context('num is a prime number', () => {
    it('should return "even"', () => {
      expect(factorGroup(17)).to.equal('even');
      expect(factorGroup(23)).to.equal('even');
      expect(factorGroup(41)).to.equal('even');
    });
  });
});
