/*
Instructions
Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length.
(It is sometimes specified as having exactly two sides the same length,
but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths.

Note
For a shape to be a triangle at all, all sides have to be of length > 0,
and the sum of the lengths of any two sides must be greater than or equal to the length of the third side.
See Triangle Inequality.

Dig Deeper
The case where the sum of the lengths of two sides equals
that of the third is known as a degenerate triangle - it has zero area and looks like a single line.
Feel free to add your own code/tests to check for degenerate triangles.
*/

class Triangle {
    constructor(...sides) {
      this.sides = sides;
    }
    get isTriangle() {
      return (
        this.sides.every((side) => side > 0) &&
        this.sides[0] + this.sides[1] >= this.sides[2] &&
        this.sides[0] + this.sides[2] >= this.sides[1] &&
        this.sides[1] + this.sides[2] >= this.sides[0]
      );
    }
    get isEquilateral() {
      return (
        this.isTriangle && this.sides.every((elem) => elem === this.sides[0])
      );
    }
    get isIsosceles() {
      return (
        this.isTriangle &&
        (this.sides[0] === this.sides[1] ||
          this.sides[0] === this.sides[2] ||
          this.sides[1] === this.sides[2])
      );
    }
    get isScalene() {
      return (
        this.isTriangle &&
        this.sides[0] !== this.sides[1] &&
        this.sides[1] !== this.sides[2] &&
        this.sides[2] !== this.sides[0]
      );
    }
  }
  const triangle = new Triangle(2, 2, 2);
  const triangle1 = new Triangle(2, 3, 2);
  console.log(triangle1.isEquilateral); //false
  console.log(triangle.isEquilateral); //true
  const isoscelesTriangle = new Triangle(1, 3, 1);
  console.log(isoscelesTriangle.isIsosceles); //false
  const scaleneTriangle = new Triangle(5, 4, 6);
  console.log(scaleneTriangle.isScalene); //true
  