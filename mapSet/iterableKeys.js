/*
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
например, применить метод .push.

Но это не выходит:

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/

//Потому что map.keys() – возвращает итерируемый объект по ключам,
//чтобы push заработал нужно итерируемый объект преобразовать в массив.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);
