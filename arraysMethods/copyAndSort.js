/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)*/

/* Вариант 1.
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return [...arr].sort();
}

let sorted = copySorted(arr);

console.log( sorted );
console.log( arr );
*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice(0).sort();
}

let sorted = copySorted(arr);

console.log( sorted );
console.log( arr );
