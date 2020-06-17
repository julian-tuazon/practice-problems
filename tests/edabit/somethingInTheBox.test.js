const { expect } = require('chai');
const { inBox } = require('../../edabit/somethingInTheBox');

describe('inBox(arr)', () => {
  context('box does not have any "*"', () => {
    it('should return false', () => {
      expect(inBox([
        '####',
        '#  #',
        '####',
      ])).to.equal(false);
    });
  });
  context('box has "*" outside', () => {
    it('should return false', () => {
      expect(inBox([
        '#####',
        '#  #*',
        '#   #',
        '#####',
      ])).to.equal(false);
      expect(inBox([
        '#####',
        '#   #',
        '*#  #',
        '#####',
      ])).to.equal(false);
      expect(inBox([
        '*',
        '#####',
        '#   #',
        '#   #',
        '#####',
      ])).to.equal(false);
    });
  });
  context('box has "*" in perimeter', () => {
    it('should return false', () => {
      expect(inBox([
        '##*##',
        '#   #',
        '#   #',
        '#####',
      ])).to.equal(false);
      expect(inBox([
        '#####',
        '#   #',
        '#   #',
        '###*#',
      ])).to.equal(false);
      expect(inBox([
        '#####',
        '#   #',
        '#   *',
        '#####',
      ])).to.equal(false);
    });
  });
  context('box has "*" inside', () => {
    it('should return true', () => {
      expect(inBox([
        '#####',
        '#   #',
        '#  *#',
        '#####',
      ])).to.equal(true);
      expect(inBox([
        '#####',
        '# * #',
        '#   #',
        '#####',
      ])).to.equal(true);
      expect(inBox([
        '#####',
        '# * #',
        '#  *#',
        '#####',
      ])).to.equal(true);
    });
  });
});
