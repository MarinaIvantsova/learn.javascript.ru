// Напишите функцию pow(x,n), которая возвращает x в степени n.
//  Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

let pow = function (x, n) {
    if (n < 1 || (n % 1 !== 0)) {
        return false;
    }
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}
let x = +prompt("Введите x:", '');
let n = +prompt("Введите n:", '');
const res = pow(x, n);

if (res === false) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное и целое число`);
} else {
    console.log(res)
}