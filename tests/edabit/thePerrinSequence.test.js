const { expect } = require('chai');
const { perrin } = require('../../edabit/thePerrinSequence');

describe('.perrin(n)', () => {
  context('n is 0', () => {
    it('should return 3', () => {
      expect(perrin(0)).to.equal(3);
    });
  });
  context('n is 1', () => {
    it('should return 0', () => {
      expect(perrin(1)).to.equal(0);
    });
  });
  context('n is 2', () => {
    it('should return 2', () => {
      expect(perrin(2)).to.equal(2);
    });
  });
  context('n is 5', () => {
    it('should return 5', () => {
      expect(perrin(5)).to.equal(5);
    });
  });
  context('n is 8', () => {
    it('should return 10', () => {
      expect(perrin(8)).to.equal(10);
    });
  });
  context('n is 26', () => {
    it('should return 1497', () => {
      expect(perrin(26)).to.equal(1497);
    });
  });
});
