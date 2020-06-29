const { expect } = require('chai');
const { doubleLetters } = require('../../edabit/doubleLetters');

describe('doubleLetters(word)', () => {
  context('word is an empty string', () => {
    it('should return false', () => {
      expect(doubleLetters('')).to.equal(false);
    });
  });
  context('word is a single character string', () => {
    it('should return false', () => {
      expect(doubleLetters('a')).to.equal(false);
      expect(doubleLetters('B')).to.equal(false);
      expect(doubleLetters('z')).to.equal(false);
    });
  });
  context('word is a >2 char string with no double letters', () => {
    it('should return false', () => {
      expect(doubleLetters('atom')).to.equal(false);
      expect(doubleLetters('nice')).to.equal(false);
      expect(doubleLetters('great')).to.equal(false);
    });
  });
  context('word is a >2 char string that includes double letters', () => {
    it('should return true', () => {
      expect(doubleLetters('cheese')).to.equal(true);
      expect(doubleLetters('greet')).to.equal(true);
      expect(doubleLetters('apple')).to.equal(true);
    });
  });
});
