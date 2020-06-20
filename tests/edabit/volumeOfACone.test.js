const { expect } = require('chai');
const { coneVolume } = require('../../edabit/volumeOfACone');

describe('coneVolume(h, r)', () => {
  context('height is 0', () => {
    it('should return true', () => {
      expect(coneVolume(0, 2)).to.equal(0);
      expect(coneVolume(0, 4)).to.equal(0);
    });
  });
  context('radius is 0', () => {
    it('should return true', () => {
      expect(coneVolume(2, 0)).to.equal(0);
      expect(coneVolume(4, 0)).to.equal(0);
    });
  });
  context('h is 2, r is 4', () => {
    it('should return 33.51', () => {
      expect(coneVolume(2, 4)).to.equal(33.51);
    });
  });
  context('h is 21, r is 14', () => {
    it('should return 33.51', () => {
      expect(coneVolume(21, 14)).to.equal(4310.27);
    });
  });
});
