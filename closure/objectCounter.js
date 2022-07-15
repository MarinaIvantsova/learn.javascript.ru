/* 
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1
*/

//Ответ:
//Будет работать, т.к вложенные функции были созданы с одним и тем же внешним лексическим окружением, т.е
//они обе находят внутри одного объекта и соответсвенно им доступны переменные внутри объекта
