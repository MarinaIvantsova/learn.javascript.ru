// Дан массив с числами. 
// Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти

let array = [1, 8, 3, 0, 4, 5, 6];
let answer = 0;
let result = array.reduceRight((prevValue, elem) => {
    if (prevValue > 10) {
        console.log(answer);
        return;
    } else {
        answer++;
        return prevValue + elem;
    }
}, 0);
console.log(result);
