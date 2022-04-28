//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
let numberArray = [5, -3, 4, 5];
let negativeNumbers =  function (elem) {
    return elem < 0;
}
let chec = numberArray.some(negativeNumbers);

console.log(chec);

