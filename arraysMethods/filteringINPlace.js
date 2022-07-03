/*
Напишите функцию filterRangeInPlace(arr, a, b),
которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/
 
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    arr.forEach((element, index) => {
        if (element < a || element > b){
            arr.splice(index, 1) 
        }
    });
    
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
