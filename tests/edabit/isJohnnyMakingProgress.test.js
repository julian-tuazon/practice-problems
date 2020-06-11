const { expect } = require('chai');
const { progressDays } = require('../../edabit/isJohnnyMakingProgress');

describe('progressDays(runs)', () => {
  context('runs array is empty', () => {
    it('should return 0', () => {
      expect(progressDays([])).to.equal(0);
    });
  });
  context('runs array only contains 1 run', () => {
    it('should return 0', () => {
      expect(progressDays([23])).to.equal(0);
    });
  });
  context('num miles ran prev day === num miles ran current day', () => {
    it('should not increase num of progress days', () => {
      expect(progressDays([1, 1])).to.equal(0);
    });
  });
  context('num miles ran prev day > num miles ran current day', () => {
    it('should not increase num of progress days', () => {
      expect(progressDays([5, 1])).to.equal(0);
    });
  });
  context('num miles ran prev day < num miles ran current day', () => {
    it('should increase num of progress days by 1', () => {
      expect(progressDays([3, 6])).to.equal(1);
    });
  });
  context('3 non-consecutive progress days', () => {
    it('should return 3', () => {
      expect(progressDays([3, 6, 2, 1, 3, 1, 5])).to.equal(3);
    });
  });
  context('4 consecutive progress days', () => {
    it('should return 4', () => {
      expect(progressDays([3, 4, 5, 6, 7])).to.equal(4);
    });
  });
});
