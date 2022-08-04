// Добавить функциям метод "f.defer(ms)"
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

// function f() {
//     alert("Hello!");
//   }

//   f.defer(1000); // выведет "Hello!" через 1 секунду

//Мой способ без prototype:
//Здесь добален метод именно функции f, а не для всех функций вообще

function f() {
    console.log("Hello!");
}

f.defer = function (ms) {
    setTimeout(f, ms);
};

f.defer(1000); // выведет "Hello!" через 1 секунду

//Второй способ с добавлением объекту Функция нового метода:

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    console.log("Hello");
}

f.defer(1000);
