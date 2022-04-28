//Дан массив с числами. Оставьте в нем только четные числа.
let numArray = [5, -3, 4, 5, 6, 8, 10, 9, -6];
let evenFunction = (elem) => {
    return elem % 2 == 0;
}
let onlyEven = numArray.filter(evenFunction);
console.log(onlyEven);