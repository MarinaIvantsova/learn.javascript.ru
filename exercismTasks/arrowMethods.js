//Task 1. Double every single card
// function seeingDouble(deck) {
//   return deck.map((elem) => elem * 2);
// }

// const deck = [1, 2, 3, 4, 10];

// console.log(seeingDouble(deck)); // [2, 4, 6, 8, 20]

/*
Task 2. Create multiple copies of every 3 found in the deck
Elyse wants to triplicate every 3 found in the deck.
If a deck started with a single 3,
after the trick the deck would have three 3's in place of the original.
*/

// const deck = [1, 3, 9, 3, 7];

// function threeOfEachThree(deck) {
//   return deck.reduce((acc, elem) => {
//     if (elem === 3) {
//       acc.push(elem, elem, elem);
//     } else {
//       acc.push(elem);
//     }
//     return acc;
//   }, []);
// }

// console.log(threeOfEachThree(deck)); //[1, 3, 3, 3, 9, 3, 3, 3, 7]

//Task 3. Find two cards from the exact middle of the deck

const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function middleTwo(deck) {
  const middle = deck.length / 2;
  deck.slice(middle - 1, middle + 1);
  return deck;
}

console.log(middleTwo(deck)); // [5, 6]
