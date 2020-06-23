const { expect } = require('chai');
const { factorChain } = require('../../edabit/factorChain');

describe('factorChain(arr)', () => {
  context('arr is empty', () => {
    it('should return false', () => {
      expect(factorChain([])).to.equal(false);
    });
  });
  context('arr length is 1', () => {
    it('should return false', () => {
      expect(factorChain([2])).to.equal(false);
    });
  });
  context('arr is a valid factor chain', () => {
    it('should return true', () => {
      expect(factorChain([2, 4, 16, 32])).to.equal(true);
      expect(factorChain([3, 9, 81])).to.equal(true);
      expect(factorChain([1, 2, 4, 64])).to.equal(true);
    });
  });
  context('arr is not a valid factor chain', () => {
    it('should return true', () => {
      expect(factorChain([2, 4, 5, 16, 32])).to.equal(false);
      expect(factorChain([3, 4, 9, 81])).to.equal(false);
      expect(factorChain([1, 2, 4, 64, 2])).to.equal(false);
    });
  });
});
