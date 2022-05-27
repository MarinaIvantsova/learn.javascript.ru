//Дан массив с числами. Найдите сумму этих чисел
let arrayOfNumbers = [1, 3, 6, 4, 7, 9];
let sum = 0;

arrayOfNumbers.forEach(
    (elem) => sum+=elem
);
console.log(sum);