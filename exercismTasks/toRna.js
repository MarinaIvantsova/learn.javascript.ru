/*
Task Rna Transcription.
Instructions:
Given a DNA strand, return its RNA complement (per RNA transcription).
Both DNA and RNA strands are a sequence of nucleotides.
The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
*/

const transform = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
  
  function toRna(dna) {
    if (!/^[G|C|T|A]*$/.test(dna)) {
      throw new Error("Invalid input DNA.");
    }
    return dna
      .split("")
      .map((elem) => transform[elem])
      .join("");
  }
  
  console.log(toRna("ACGTGGTCTTAA")); //"UGCACCAGAAUU"
  console.log(toRna("")); //""
  console.log(toRna("G")); //"C"
  console.log(toRna("OA")); //Error: Invalid input DNA.
  