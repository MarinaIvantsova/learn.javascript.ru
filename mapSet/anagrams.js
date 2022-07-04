/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

Первый способ (с объектом, т.к ключи - строки.

function aclean(arr) {
    let obj = {};
    arr.forEach(element => {
        let sorted = element.toLowerCase().split('').sort().join('');
        obj[sorted] = element;
    });
    return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
*/

//Второй способ с map.

function aclean(arr) {
    let map = new Map();

    arr.forEach(element => {
        let sorted = element.toLowerCase().split('').sort().join('');
        map.set(sorted, element);
    });

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
