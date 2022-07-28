// Task 1. Implement the translate2d function that returns a function making use of a closure
// to perform a repeatable 2d translation of a coordinate pair.

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result = moveCoordinatesRight2Px(4, 8);
// result => [6, 8]

function translate2d(dx, dy) {
    return function (x, y) {
       return [x + dx, y + dy];
     };
}

// Task 2. Implement the scale2d function
// that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.

// For this exercise, assume only positive scaling values.

// const doubleScale = scale2d(2, 2);
// const result = doubleScale(6, -3);
// result => [12, -6]

function scale2d(sx, sy) {
    return function (x, y) {
     return [x * sx, y * sy];
   };
 }


//  Task 3. Combine two transformation functions to perform a repeatable transformation.
// This is often called function composition,
// where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const doubleCoordinates = scale2d(2, 2);
// const composedTransformations = composeTransformation(
//   moveCoordinatesRight2Px,
//   doubleCoordinates
// );
// const result = composedTransformations(0, 1);
// result => [4, 2]

 function translate2d(dx, dy) {
    return function (x, y) {
       return [x + dx, y + dy];
     };
   }
  
   function scale2d(sx, sy) {
    return function (x, y) {
     return [x * sx, y * sy];
   };
  }
  function composeTransform(f, g) {
    return function composed(x, y) {
      return g(...f(x, y))
    }
  }
  
  
  const moveCoordinatesRight2Px = translate2d(2, 0);
  const doubleCoordinates = scale2d(2, 2);
  const composedTransformations = composeTransform(
    moveCoordinatesRight2Px,
    doubleCoordinates
  );
  const result = composedTransformations(0, 1);
  
  console.log(result);
