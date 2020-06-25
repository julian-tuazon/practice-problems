const { expect } = require('chai');
const { capMe } = require('../../edabit/capitalizeTheWords');

describe('capMe(arr)', () => {
  context('arr is empty', () => {
    it('should return an empty array', () => {
      expect(capMe([])).to.deep.equal([]);
    });
  });
  context('arr has names in all caps', () => {
    it('should return array of names with only first letter capitalized', () => {
      expect(capMe(['JOE', 'JOHN'])).to.deep.equal(['Joe', 'John']);
      expect(capMe(['JOE', 'JOHN', 'Frank'])).to.deep.equal(['Joe', 'John', 'Frank']);
    });
  });
  context('arr has names in all lowercase', () => {
    it('should return array of names with only first letter capitalized', () => {
      expect(capMe(['jim', 'mary'])).to.deep.equal(['Jim', 'Mary']);
      expect(capMe(['jim', 'mary', 'Jimmy'])).to.deep.equal(['Jim', 'Mary', 'Jimmy']);
    });
  });
  context('arr has names with first letter already capitalized', () => {
    it('should return array of names with only first letter capitalized', () => {
      expect(capMe(['Jack', 'Jip'])).to.deep.equal(['Jack', 'Jip']);
      expect(capMe(['Sakura', 'Hyewon'])).to.deep.equal(['Sakura', 'Hyewon']);
    });
  });
});
