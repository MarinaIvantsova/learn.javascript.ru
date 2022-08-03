// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// console.log( rabbit.eats ); // true

// 1. Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log( rabbit.eats ); // true, т.к Rabbit.prototype = {}; будет действовать на новые созданные объекты

// 2. …А если код такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); // false, т.к изменяем один и тот ж объект Rabbit.prototype

//3. Или такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats; //у объекта rabbit нет свойства eats, поэтому нечего удалять

// console.log(rabbit.eats); // вернет true, найдет свойство eats в прототипе

//4. Или, наконец, такой:

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;


console.log(rabbit.eats); // undefined, удалено свойство eats у прототипа и у самого объекта rabbit его нет
