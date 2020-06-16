const { expect } = require('chai');
const { letterAtPosition } = require('../../edabit/positionInTheAlphabet');

describe('letterAtPosition(n)', () => {
  context('n is not an integer with a nonzero number after the decimal point', () => {
    it('should return "invalid"', () => {
      expect(letterAtPosition(2.3)).to.equal('invalid');
    });
  });
  context('n is a whole number expressed as a double', () => {
    it('should return the corresponding letter', () => {
      expect(letterAtPosition(3.0)).to.equal('c');
    });
  });
  context('n is an integer within the range of 1-26', () => {
    it('should return the corresponding letter', () => {
      expect(letterAtPosition(4)).to.equal('d');
    });
  });
  context('n is an integer out of range, greater than 26', () => {
    it('should return "invalid"', () => {
      expect(letterAtPosition(30)).to.equal('invalid');
    });
  });
  context('n is an integer out of the range, less than 1', () => {
    it('should return "invalid"', () => {
      expect(letterAtPosition(-2)).to.equal('invalid');
    });
  });
});
