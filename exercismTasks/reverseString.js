// Reverse a string
// For example: input: "cool" output: "looc"


const reverseString = (input) => {
    if (typeof input !== "string") {
        throw new Error("string is expected!");
    }
    return [...input].reverse().join("");
};

console.log(reverseString("veL")); //Lev
console.log(reverseString(123)); // Error: string is expected!
