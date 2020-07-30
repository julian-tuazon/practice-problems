// Transcribe To mRNA
// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription.DNA has the bases A, T, G and C, while RNA has U in place of T and all of the other bases remains the same.

//   Examples
// dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"

// dnaToRna("CGATATA") ➞ "GCUAUAU"

// dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
// Notes
// Transcription is the process of making complementary strand.
//   A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.

function dnaToRna(dna) {
  const transcribedBases = {
    A: 'U',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  let rna = '';
  for (const base of dna) {
    rna += transcribedBases[base];
  }
  return rna;
}
