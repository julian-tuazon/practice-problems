const { expect } = require('chai');
const { rev } = require('../../edabit/reverseTheNum');

describe('rev(n)', () => {
  context('n is a single digit', () => {
    it('should return n as a string', () => {
      expect(rev(0)).to.equal('0');
      expect(rev(3)).to.equal('3');
      expect(rev(9)).to.equal('9');
    });
  });
  context('n is a number with all the same digits', () => {
    it('should return n as a string', () => {
      expect(rev(333)).to.equal('333');
      expect(rev(77777)).to.equal('77777');
      expect(rev(99)).to.equal('99');
    });
  });
  context('n is a negative number', () => {
    it('should return the reversed number as a string with no negative sign', () => {
      expect(rev(-10)).to.equal('01');
      expect(rev(-34)).to.equal('43');
      expect(rev(-93)).to.equal('39');
    });
  });
  context('n is a positive number with different digits', () => {
    it('should return the reversed number as a string', () => {
      expect(rev(53)).to.equal('35');
      expect(rev(1234)).to.equal('4321');
      expect(rev(293)).to.equal('392');
    });
  });
});
