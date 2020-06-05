const { expect } = require('chai');
const { multiplyNums } = require('../../edabit/multiplyingNumsInString');

describe('.multiplyNums(nums)', () => {
  context("nums is '2, 3'", () => {
    it("should return 6", () => {
      expect(multiplyNums('2, 3')).to.equal(6);
    });
  });
  context("nums is '-12, 5'", () => {
    it("should return -60", () => {
      expect(multiplyNums('-12, 5')).to.equal(-60);
    });
  });
  context("nums is '2, 5, 7, 23'", () => {
    it("should return 1610", () => {
      expect(multiplyNums('2, 5, 7, 23')).to.equal(1610);
    });
  });
  context("nums is '6, 0, 12121, 2'", () => {
    it("should return 1610", () => {
      expect(multiplyNums('6, 0, 12121, 2')).to.equal(0);
    });
  });
});
