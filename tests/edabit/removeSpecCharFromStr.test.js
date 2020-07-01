const { expect } = require('chai');
const { removeSpecialCharacters } = require('../../edabit/removeSpecCharFromStr');

describe('removeSpecialCharacters(str)', () => {
  context('str is empty', () => {
    it('should return an empty string', () => {
      expect(removeSpecialCharacters('')).to.equal('');
    });
  });
  context('str contains no special characters', () => {
    it('should return the same string', () => {
      expect(removeSpecialCharacters('Hello world')).to.equal('Hello world');
      expect(removeSpecialCharacters('The Great Gatsby 2')).to.equal('The Great Gatsby 2');
      expect(removeSpecialCharacters('M1yawaki-S4kura_')).to.equal('M1yawaki-S4kura_');
    });
  });
  context('str contains special characters', () => {
    it('should return string without special characters', () => {
      expect(removeSpecialCharacters('What?!')).to.equal('What');
      expect(removeSpecialCharacters('@the-world')).to.equal('the-world');
      expect(removeSpecialCharacters('Kang#&$ Hyewon')).to.equal('Kang Hyewon');
    });
  });
});
