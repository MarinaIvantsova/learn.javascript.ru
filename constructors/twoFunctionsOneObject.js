// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() {  }
function B() { return a }

let a = new A;
let b = new B;

console.log( a == b ); // true