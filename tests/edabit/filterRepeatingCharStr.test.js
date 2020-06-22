const { expect } = require('chai');
const { identicalFilter } = require('../../edabit/filterRepeatingCharStr');

describe('identicalFilter(arr)', () => {
  context('arr has single char strings', () => {
    it('should return an array that includes these single char strings', () => {
      expect(identicalFilter(['a', 'b', 'c', 'dd'])).to.deep.equal(['a', 'b', 'c', 'dd']);
      expect(identicalFilter(['1', 'z', 'tt', '0', 'dd'])).to.deep.equal(['1', 'z', 'tt', '0', 'dd']);
    });
  });
  context('arr has strings with non-repeating, non-identical chars', () => {
    it('should return an array that excludes these strings', () => {
      expect(identicalFilter(['att', 'baa', 'cccc', 'ddr'])).to.deep.equal(['cccc']);
      expect(identicalFilter(['round1', 'cccp', 'aa', '111', '11tt'])).to.deep.equal(['aa', '111']);
    });
  });
  context('arr only has strings with non-repeating non-identical chars', () => {
    it('should return an empty array', () => {
      expect(identicalFilter(['att', 'baa', 'cccp', 'ddr', '1123'])).to.deep.equal([]);
    });
  });
  context('arr only has strings with repeating identical chars', () => {
    it('should return the array', () => {
      expect(identicalFilter(['aa', 'zzz', '000'])).to.deep.equal(['aa', 'zzz', '000']);
    });
  });
});
