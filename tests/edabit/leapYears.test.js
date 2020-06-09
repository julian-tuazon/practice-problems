const { expect } = require('chai');
const { isLeap } = require('../../edabit/leapYears');

describe('.isLeap(year)', () => {
  context('year is evenly divisible by 400', () => {
    it("should return true", () => {
      expect(isLeap(2000)).to.equal(true);
    });
  });
  context('year is evenly divisible by 4, but not by 100', () => {
    it("should return true", () => {
      expect(isLeap(4040)).to.equal(true);
    });
  });
  context('year is evenly divisible by 4 and by 100', () => {
    it("should return false", () => {
      expect(isLeap(2200)).to.equal(false);
    });
  });
  context('year is not evenly divisible by 400 or by 4', () => {
    it("should return false", () => {
      expect(isLeap(2039)).to.equal(false);
    });
  });
});
