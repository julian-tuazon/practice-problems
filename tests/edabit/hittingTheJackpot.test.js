const { expect } = require('chai');
const { testJackpot } = require('../../edabit/hittingTheJackpot');

describe('.testJackpot(result)', () => {
  context('all elements of the array are identical', () => {
    it('should return true', () => {
      expect(testJackpot('@', '@', '@', '@')).to.equal(true);
    });
  });
  context('all elements of the array are not identical', () => {
    it('should return false', () => {
      expect(testJackpot('!', '@', '@', '@')).to.equal(false);
    });
  });
  context('only 2 elements of the array are identical', () => {
    it('should return false', () => {
      expect(testJackpot('!', '!', '@', '@')).to.equal(false);
    });
  });
  context('only 3 elements of the array are identical', () => {
    it('should return false', () => {
      expect(testJackpot('Ss', 'Ss', 'Ss', 'ss')).to.equal(false);
    });
  });
});
