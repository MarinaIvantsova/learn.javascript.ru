// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
let array = [0, 2, 3, 4, 5, 6];
let answer;
let result = array.reduce((sum, elem) => {
    if (elem) {
        return sum + elem;
    } else {
        return answer = sum;
    }
}, 0);
if (answer === undefined) { answer = result };
console.log(answer);
