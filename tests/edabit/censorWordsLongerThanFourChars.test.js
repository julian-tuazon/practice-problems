const { expect } = require('chai');
const { censor } = require('../../edabit/censorWordsLongerThanFourChars');

describe('censor(str)', () => {
  context('str has no words > 4 chars', () => {
    it('should return same str', () => {
      expect(censor('The big one')).to.equal('The big one');
    });
  });
  context('str is only one exactly 4 char word with no spaces', () => {
    it('should return same str', () => {
      expect(censor('peep')).to.equal('peep');
    });
  });
  context('str has only one word <= 4 chars with no spaces', () => {
    it('should return same str', () => {
      expect(censor('hi')).to.equal('hi');
    });
  });
  context('str has only one word > 4 chars with no spaces', () => {
    it('should return censored word', () => {
      expect(censor('peeps')).to.equal('*****');
    });
  });
  context('str has words that are all > 4 chars', () => {
    it('should return all censored words with same length and spaces', () => {
      expect(censor('whats great about these')).to.equal('***** ***** ***** *****');
    });
  });
  context('str has words that are both <= and > 4 chars', () => {
    it('should return some censored words with same length and spaces', () => {
      expect(censor('when is britney celebrating her birthday')).to.equal('when is ******* *********** her ********');
    });
  });
});
