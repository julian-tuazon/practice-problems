const { expect } = require('chai');
const { countTrue } = require('../../edabit/howMuchIsTrue');

describe('.countTrue(arr)', () => {
  context("arr is empty", () => {
    it("should return 0", () => {
      expect(countTrue([])).to.equal(0);
    });
  });
  context("arr is [true, true, true]", () => {
    it("should return 3", () => {
      expect(countTrue([true, true, true])).to.equal(3);
    });
  });
  context("arr is [false, false, false]", () => {
    it("should return 0", () => {
      expect(countTrue([false, false, false])).to.equal(0);
    });
  });
  context("arr is [false, true, false, false]", () => {
    it("should return 1", () => {
      expect(countTrue([false, true, false, false])).to.equal(1);
    });
  });
  context("arr is [true, true, true, false, false, true]", () => {
    it("should return 1", () => {
      expect(countTrue([true, true, true, false, false, true])).to.equal(4);
    });
  });
});
