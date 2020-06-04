const { expect } = require('chai');
const { getEquivalent } = require('../../edabit/enharmonicEquivalents');

describe('.getEquivalent(note)', () => {
  context("note is 'C#'", () => {
    it("should return 'Db'", () => {
      expect(getEquivalent('C#')).to.equal('Db');
    });
  });
  context("note is 'Db'", () => {
    it("should return 'C#'", () => {
      expect(getEquivalent('Db')).to.equal('C#');
    });
  });
  context("note is 'D#'", () => {
    it("should return 'Eb'", () => {
      expect(getEquivalent('D#')).to.equal('Eb');
    });
  });
  context("note is 'Eb'", () => {
    it("should return 'D#'", () => {
      expect(getEquivalent('Eb')).to.equal('D#');
    });
  });
  context("note is 'F#'", () => {
    it("should return 'Gb'", () => {
      expect(getEquivalent('F#')).to.equal('Gb');
    });
  });
  context("note is 'Gb'", () => {
    it("should return 'F#'", () => {
      expect(getEquivalent('Gb')).to.equal('F#');
    });
  });
  context("note is 'G#'", () => {
    it("should return 'Ab'", () => {
      expect(getEquivalent('G#')).to.equal('Ab');
    });
  });
  context("note is 'Ab'", () => {
    it("should return 'G#'", () => {
      expect(getEquivalent('Ab')).to.equal('G#');
    });
  });
  context("note is 'A#'", () => {
    it("should return 'Bb'", () => {
      expect(getEquivalent('A#')).to.equal('Bb');
    });
  });
  context("note is 'Bb'", () => {
    it("should return 'A#'", () => {
      expect(getEquivalent('Bb')).to.equal('A#');
    });
  });
});
