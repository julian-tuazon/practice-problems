const { expect } = require('chai');
const { rps } = require('../../edabit/rockPaperScissors');

describe('.rps()', () => {
  context('p1 rock vs p2 scissors', () => {
    it('should return winner as p1', () => {
      expect(rps('Rock', 'Scissors')).to.equal('The winner is p1');
    });
  });
  context('p1 scissors vs p2 rock', () => {
    it('should return winner as p2', () => {
      expect(rps('Scissors', 'Rock')).to.equal('The winner is p2');
    });
  });
  context('p1 paper vs p2 scissors', () => {
    it('should return winner as p2', () => {
      expect(rps('Paper', 'Scissors')).to.equal('The winner is p2');
    });
  });
  context('p1 scissors vs p2 paper', () => {
    it('should return winner as p1', () => {
      expect(rps('Scissors', 'Paper')).to.equal('The winner is p1');
    });
  });
  context('p1 rock vs p2 paper', () => {
    it('should return winner as p2', () => {
      expect(rps('Rock', 'Paper')).to.equal('The winner is p2');
    });
  });
  context('p1 paper vs p2 rock', () => {
    it('should return winner as p1', () => {
      expect(rps('Paper', 'Rock')).to.equal('The winner is p1');
    });
  });
  context('p1 paper vs p2 paper', () => {
    it('should return a draw', () => {
      expect(rps('Paper', 'Paper')).to.equal("It's a draw");
    });
  });
});
