const { expect } = require('chai');
const { matchLastItem } = require('../../edabit/matchTheLastItem');

describe('matchLastItem(arr)', () => {
  context('arr items match the last item', () => {
    it('should return true', () => {
      expect(matchLastItem(['my', 'smol', 'cat', 'mysmolcat'])).to.equal(true);
    });
  });
});
