const { expect } = require('chai');
const { transformUpvotes } = require('../../edabit/transformUpvotes');

describe('transformUpvotes(str)', () => {
  context('str is empty', () => {
    it('should return an array with 0', () => {
      expect(transformUpvotes('')).to.deep.equal([0]);
    });
  });
  context('str has upvotes with "k" character', () => {
    it('should convert "k" numbers to thousands', () => {
      expect(transformUpvotes('2.2k 5.3k 1.1k')).to.deep.equal([2200, 5300, 1100]);
      expect(transformUpvotes('12.6k 4.1k 25.9k')).to.deep.equal([12600, 4100, 25900]);
    });
  });
  context('str has upvotes with no "k" character', () => {
    it('should convert these string numbers into numbers', () => {
      expect(transformUpvotes('2.2k 23 1.1k 100')).to.deep.equal([2200, 23, 1100, 100]);
      expect(transformUpvotes('12.6k 87 4838 4.1k 194 25.9k')).to.deep.equal([12600, 87, 4838, 4100, 194, 25900]);
    });
  });
});
