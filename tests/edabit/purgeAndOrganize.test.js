const { expect } = require('chai');
const { uniqueSort } = require('../../edabit/purgeAndOrganize');

describe('uniqueSort(arr)', () => {
  context('array is empty', () => {
    it('should return empty array', () => {
      expect(uniqueSort([])).to.deep.equal([]);
    });
  });
  context('array is has one value', () => {
    it('should return same array', () => {
      expect(uniqueSort([2])).to.deep.equal([2]);
    });
  });
  context('array values are already sorted with no duplicates', () => {
    it('should return same array', () => {
      expect(uniqueSort([2, 5, 9])).to.deep.equal([2, 5, 9]);
    });
  });
  context('array values are unsorted with no duplicates', () => {
    it('should return sorted array', () => {
      expect(uniqueSort([27, 4, 15, 1])).to.deep.equal([1, 4, 15, 27]);
    });
  });
  context('array values are unsorted with duplicates', () => {
    it('should return sorted array with no duplicates', () => {
      expect(uniqueSort([27, 4, 27, 1, 15, 4, 4, 15, 15, 1, 27])).to.deep.equal([1, 4, 15, 27]);
    });
  });
  context('array contains negative numbers', () => {
    it('should return sorted array with no duplicates', () => {
      expect(uniqueSort([27, -4, 27, 1, 15, 4, 4, -15, -15, 1, 27, -4])).to.deep.equal([-15, -4, 1, 4, 15, 27]);
    });
  });
});
