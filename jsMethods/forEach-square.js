//Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
let array = [1, 3, 6, 4, 7, 9];
let newArray = [];
array.forEach(element =>  newArray.push(element * element));

console.log(newArray);