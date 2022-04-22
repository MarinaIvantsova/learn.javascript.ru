/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

const schedule = {};
schedule["8:30"] = "get up";

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(schedule));
