const { expect } = require('chai');
const { oneOddOneEven } = require('../../edabit/oneOddOneEven');

describe('.oneOddOneEven(n)', () => {
  context('n has one odd digit, one even digit', () => {
    it("should return true", () => {
      expect(oneOddOneEven(12)).to.equal(true);
    });
  });
  context('n has all odd digits', () => {
    it("should return false", () => {
      expect(oneOddOneEven(33)).to.equal(false);
    });
  });
  context('n has all even digits', () => {
    it("should return false", () => {
      expect(oneOddOneEven(22)).to.equal(false);
    });
  });
});
