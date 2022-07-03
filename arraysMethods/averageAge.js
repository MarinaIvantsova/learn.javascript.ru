/*
Напишите функцию getAverageAge(users),
 которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/
/*
Первый вариант:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum+= element.age;
    });
    return sum / arr.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */

//Второй вариант

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    return arr.reduce((acc, elem) => (acc + elem.age), 0) / arr.length;
}

console.log(getAverageAge(arr));
