/*
Determine if a sentence is a pangram. A pangram is a sentence using every letter of the alphabet at least once.
The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive.
Input will not contain non-ASCII symbols.
*/

const alhabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (sentence) => {
    return alhabetArray.every((letter) => {
        return sentence.toLowerCase().includes(letter);
    });
};

console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); //true
console.log(
    isPangram("a quick movement of the enemy will jeopardize five gunboats")
); //false
