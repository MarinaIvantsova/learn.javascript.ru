/*
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); //Будет ошибка, т.к функция объявлена внутри блока if и соответсвенно ее можно вызвать только внутри блока if
*/