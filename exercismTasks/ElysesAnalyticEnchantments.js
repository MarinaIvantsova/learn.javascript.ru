//Task 1. Find the position of a card

// const card = 2;

// function getCardPosition(stack, card) {
//   return stack.indexOf(card);
// }

// console.log(getCardPosition([9, 7, 3, 2], card)); //=> 3

//Task 2. Determine if a card is present in the stack
// -- in other words, if the stack contains a specific number.

// const card = 3;

// function doesStackIncludeCard(stack, card) {
//   return stack.includes(card);
// }

// console.log(doesStackIncludeCard([2, 3, 4, 5], card)); //true

//Task 3. Determine if each card is even.
//In other words, if each number in the stack is an even number.

// function isEachCardEven(stack) {
//   return stack.every(elem => elem % 2 === 0);
// }
// console.log(isEachCardEven([2, 4, 6, 7])); // => false

//Task 4. Check if the stack contains an odd-value card

// function doesStackIncludeOddCard(stack) {
//   return stack.some(elem => elem % 2 !== 0 )
// }

// console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8])); //true

//Task 5. Get the first odd card from the stack

// function getFirstOddCard(stack) {
//   return stack.find((elem) => elem % 2 !== 0);
// }

// console.log(getFirstOddCard([4, 2, 8, 7, 9])); // => 7

//Task 6. Determine the position of the first card that is even

function getFirstEvenCardPosition(stack) {
    return stack.findIndex((elem) => elem % 2 === 0);
  }
  
  console.log(getFirstEvenCardPosition([5, 2, 3, 1])); // => 1
  