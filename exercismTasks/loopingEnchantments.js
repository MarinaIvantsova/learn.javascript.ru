/*
Task 1.

Determine how many cards of a certain type are in the deck.

Elyse wants to know how many cards of a particular type she has in her deck.

Write a function cardTypeCheck that takes two parameters: an array of cards (Elyse's deck)
and the type of card to count.
The function should use forEach and return the number of cards in the deck of the specified type.

Example:

const cardType = 3;
cardTypeCheck([1, 2, 3, 4], cardType);
// => 1

Task 2.

Determine how many odd or even cards there are.

For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function determineOddEvenCards that takes in two parameters: an array of cards (Elyse's deck),
and a boolean (true is analogous to 'even', and false is analogous to 'odd').

This function should return a single number:
the number of odd or even cards there are (depending on the value of the second argument) in the deck.

Example:

determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
// => 2

determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
// => 4
*/

const cardType = 3;

function cardTypeCheck(stack, card) {
    let count = 0;

    stack.forEach((cardType) => {
        if (cardType === card) {
            count++;
        }
    });

    return count;
}

console.log(cardTypeCheck([1, 2, 3, 3, 4], cardType)); // 2


function determineOddEvenCards(stack, type) {
    const division = type ? 0 : 1;

    let count = 0;

    for (const card of stack) {
        if (card % 2 === division) {
            count += 1;
        }
    }

    return count;
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true)); // 2

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false)); // 4
