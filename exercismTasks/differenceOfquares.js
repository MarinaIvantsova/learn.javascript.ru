/*
Instructions
Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.

The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.

The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.

Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares
of the first ten natural numbers is 3025 - 385 = 2640.

You are not expected to discover an efficient solution to this yourself from first principles;
research is allowed, indeed, encouraged.
Finding the best algorithm for the problem is a key skill in software engineering.
*/

class Squares {
    constructor(n) {
      this.n = n;
    }
    get sumOfSquares() {
      return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
    }
    get squareOfSum() {
      return Math.pow((this.n * (this.n + 1)) / 2, 2);
    }
    get difference() {
      return Math.abs(this.sumOfSquares - this.squareOfSum);
    }
  }
  
  const squares1 = new Squares(1);
  const squares5 = new Squares(5);
  const squares100 = new Squares(100);
  console.log(squares5.difference); //170
  console.log(squares1.squareOfSum); //1
  console.log(squares5.squareOfSum); // 225
  console.log(squares100.squareOfSum); //25502500
  console.log(squares5.sumOfSquares); //55
  