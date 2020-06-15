const { expect } = require('chai');
const { findZip } = require('../../edabit/findSecondOccurrenceOfZip');

describe('findZip(str)', () => {
  context('str is empty', () => {
    it('should return -1', () => {
      expect(findZip('')).to.equal(-1);
    });
  });
  context('str has no "zip"', () => {
    it('should return -1', () => {
      expect(findZip('The big ship went to take a dip.')).to.equal(-1);
    });
  });
  context('str has only 1 "zip"', () => {
    it('should return -1', () => {
      expect(findZip('The big ship zip went to take a dip.')).to.equal(-1);
    });
  });
  context('str has 2 instances of "zip"', () => {
    it('should return second instance at index 15', () => {
      expect(findZip('The zip took a zip trip.')).to.equal(15);
    });
  });
  context('str has 3 instances of "zip"', () => {
    it('should return second instance at index 15', () => {
      expect(findZip('The zip took a zip trip to the zip store.')).to.equal(15);
    });
  });
});
