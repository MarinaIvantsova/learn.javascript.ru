/*
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
*/

//Мой способ:

Function.prototype.defer = function (ms) {
    return (...args) => {
      setTimeout(this, ms, args[0], args[1]);
    };
  };
  
  function f(a, b) {
    console.log(a + b);
  }
  
  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//Второй способ:

Function.prototype.defer = function (ms) {
    let f = this;

    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
};

// check it
function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//Третий способ:

Function.prototype.defer = function (ms) {
    return (...args) => {
        setTimeout(() => f.apply(this, args), ms);
    };
};

// check it
function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.  
