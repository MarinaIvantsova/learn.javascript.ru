//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
const arr = [1, 2, 3, 4, 5];

let secondArray = arr.map(element =>  element * element);
console.log(secondArray);