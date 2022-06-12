/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

let schedule = {
    a: 5,
    b: 7
};

let isEmpty = function (schedule) {
    for (let prop in schedule) {
        console.log(prop);
        console.log('зашел');
        return false;
    }
    return true;
}

console.log(isEmpty(schedule));