// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

let arrayOfNumberss = [1, 3, 4, -8, 0, -8];

let amountOfNegative = arrayOfNumberss.filter((elem) => {
    return elem < 0;
}).length;

console.log(amountOfNegative);