const { expect } = require('chai');
const { bbqSkewers } = require('../../edabit/barbecueSkewers');

describe('.bbqSkewers(grill)', () => {
  context("grill contains 5 vegetarian skewers", () => {
    it("should return [5, 0]", () => {
      expect(bbqSkewers([
        "--oo--o--oo--",
        "--oo--o--oo--",
        "--oo--o--oo--",
        "--oo--o--oo--",
        "--oo--o--oo--",
      ])).to.deep.equal([5, 0]);
    });
  });
  context("grill contains 5 all-meat, non-vegetarian skewers", () => {
    it("should return [0, 5]", () => {
      expect(bbqSkewers([
        "--xxx-x--xx--",
        "--xx--x-xxx--",
        "--x-xxx--",
        "--xx--x-xxx--",
        "--xxxxx-xxx--",
      ])).to.deep.equal([0, 5]);
    });
  });
  context("grill contains 5 mixed, non-vegetarian skewers", () => {
    it("should return [0, 5]", () => {
      expect(bbqSkewers([
        "--xox-x--xx--",
        "--xx--x-ooo--",
        "--x-xox--",
        "--x--o---",
        "--xxoxx-xxx--",
      ])).to.deep.equal([0, 5]);
    });
  });
  context("grill contains 1 vegetarian, 4 non-vegetarian skewers", () => {
    it("should return [1, 4]", () => {
      expect(bbqSkewers([
        "--xxx-x--xx--",
        "--oo--o-ooo--",
        "--x-xxx--",
        "--ox--x-oox--",
        "--xxoxx-xxx--",
      ])).to.deep.equal([1, 4]);
    });
  });
  context("grill contains 2 vegetarian, 3 non-vegetarian skewers", () => {
    it("should return [2, 3]", () => {
      expect(bbqSkewers([
        "--xxx-x--xx--",
        "--oo--o-ooo--",
        "--oooo-----",
        "--xx--x-xox--",
        "--xxxxx-xxx--",
      ])).to.deep.equal([2, 3]);
    });
  });
});
