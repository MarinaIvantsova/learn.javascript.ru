/*
Given a string representing a matrix of numbers, return the rows and columns of that matrix.

So given a string with embedded newlines like:

9 8 7
5 3 2
6 6 7
representing this matrix:

    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7
your code should be able to spit out:

A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
A list of the columns, reading each column top-to-bottom while moving from left-to-right.
The rows for our example matrix:

9, 8, 7
5, 3, 2
6, 6, 7
And its columns:

9, 5, 6
8, 3, 6
7, 2, 7
*/

class Matrix {
    constructor(str) {
      this.matrix = str
        .split("\n")
        .map((row) => row.split(" ").map((elem) => Number(elem)));
    }
  
    get rows() {
      return this.matrix;
    }
  
    get columns() {
      return this.matrix[0].map((column, index) =>
        this.matrix.map((row) => row[index])
      );
    }
  }
  
  console.log(new Matrix("1 2\n3 4").rows[1]); //[3, 4]
  console.log(new Matrix("1 2 3\n4 5 6\n7 8 9").columns[2]); //[3, 6, 9]
  