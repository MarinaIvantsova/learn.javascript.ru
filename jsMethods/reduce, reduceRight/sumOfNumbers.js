// Дан массив с числами. Найдите сумму этих чисел.
let numbArr = [1, 4, 6, 7];
let sumOfNumbers = numbArr.reduce((sum, elem) =>  sum + elem, 0);
console.log(sumOfNumbers);