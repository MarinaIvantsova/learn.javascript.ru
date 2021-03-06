/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

// С использованием цикла.

//// Первый способ

function sumTo(n) {
    let sum = 0;
    for (n; n > 0; n--) {
        console.log(n);
        sum += n;
    }
    return sum;

}

console.log(sumTo(100)); // 5050

////Второй способ

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(100));

//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo(n) {
    if (n > 1) {
        return n + sumTo(n - 1);
    }
    return n;
}

console.log(sumTo(100));

//// Второй способ

function sumTo(n) {
    if (n === 1) {
        return n
    }
    
    return n + sumTo(n - 1);
}

console.log(sumTo(3));

//С использованием формулы арифметической прогрессии.

function sumTo(n) {
    return ((1 + n) / 2) * n;
}

console.log(sumTo(100));

//P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

/*
Самый быстрый через формулу. 
Оно использует всего три операции для любого n, а цикл и рекурсия требуют как минимум n операций сложения.
Вариант с циклом – второй по скорости. Он быстрее рекурсии,
так как операций сложения столько же, но нет дополнительных вычислительных затрат на организацию вложенных вызовов.
Поэтому рекурсия в данном случае работает медленнее всех.
*/

//P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

/*
Некоторые движки поддерживают оптимизацию «хвостового вызова»:
если рекурсивный вызов является самым последним в функции (sumTo выше не будет оптимизирован,
т.к. последним происходит сложение, а не рекурсивный вызов),
то внешней функции не нужно будет возобновлять выполнение и не нужно запоминать контекст его выполнения.
В итоге требования к памяти снижаются, и сумма sumTo(100000) будет успешно вычислена.
Но если JavaScript-движок не поддерживает это (большинство не поддерживают),
будет ошибка: максимальный размер стека превышен, так как обычно существует ограничение на максимальный размер стека.
*/
