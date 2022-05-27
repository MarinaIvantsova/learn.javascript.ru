// Дан массив с числами. Оставьте в нем только положительные числа. 
// Затем извлеките квадратный корень и этих чисел.

let array = [1, 25, 0, 36, -8, 81, 0];

let positiveNumbers = array.filter((elem) => {
if(elem > 0) {
    return elem;
}
});

let squareRoots = positiveNumbers.map((elem) => {
    return Math.sqrt(elem);
})
console.log(positiveNumbers);
console.log(squareRoots);