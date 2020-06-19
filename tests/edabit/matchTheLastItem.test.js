const { expect } = require('chai');
const { matchLastItem } = require('../../edabit/matchTheLastItem');

describe('matchLastItem(arr)', () => {
  context('arr items match the last item', () => {
    it('should return true', () => {
      expect(matchLastItem(['my', 'smol', 'cat', 'mysmolcat'])).to.equal(true);
      expect(matchLastItem(['the', 1, 'icecream', 'the1icecream'])).to.equal(true);
      expect(matchLastItem([1, true, 'cat', '1truecat'])).to.equal(true);
    });
  });
  context('arr items do not match the last item', () => {
    it('should return false', () => {
      expect(matchLastItem(['my', 'large', 'cat', 'mysmolcat'])).to.equal(false);
      expect(matchLastItem([1, 'large', 'cat', 'mysmolcat'])).to.equal(false);
      expect(matchLastItem([1, true, 'cat', 'mysmolcat'])).to.equal(false);
    });
  });
});
