/*Instructions
Convert a phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program
that converts a long name like Portable Network Graphics to its acronym (PNG).*/

const parse = (str) => {
    return str
      .match(/[A-Z,a-z']+/g)
      .map((elem) => elem[0])
      .join("").toUpperCase();
  };

console.log(parse("Portable Network Graphics")); //PNG 
console.log(parse("The Road _Not_ Taken")); //TRNT 
console.log(parse("Halley's Comet"));//HC 
