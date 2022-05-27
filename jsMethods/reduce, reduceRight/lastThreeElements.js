// Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца.
//  Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0

let array = [1, 2, 3, 0, 4, 5, 6];
let answer;
let result = array.reduceRight((sum, elem) => {
    if (elem) {
        return sum + elem;
    } else {
        return answer = sum;
    }
}, 0);
if (answer === undefined) { answer = result };
console.log(answer);
