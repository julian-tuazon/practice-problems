const { expect } = require('chai');
const { factorize } = require('../../edabit/factorizeANum');

describe('factorize(num)', () => {
  context('num is 1', () => {
    it('should return [1]', () => {
      expect(factorize(1)).to.deep.equal([1]);
    });
  });
  context('num is 2', () => {
    it('should return [1, 2]', () => {
      expect(factorize(2)).to.deep.equal([1, 2]);
    });
  });
  context('num is 4', () => {
    it('should return [1, 2, 4]', () => {
      expect(factorize(4)).to.deep.equal([1, 2, 4]);
    });
  });
  context('num is 24', () => {
    it('should return [1, 2, 3, 4, 6, 8, 12, 24]', () => {
      expect(factorize(24)).to.deep.equal([1, 2, 3, 4, 6, 8, 12, 24]);
    });
  });
});
