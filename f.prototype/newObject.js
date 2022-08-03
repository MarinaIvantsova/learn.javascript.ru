/*
Представьте, что у нас имеется некий объект obj,
созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj,
с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

//Gример функции-конструктора для объекта obj, с которой такой вызов корректно сработает:

// function Someconstructor() {
//     this.isAdmin = false;
//   }

//   let obj = new Someconstructor();

//   let obj2 = new obj.constructor();

//   console.log(obj2);

//   console.log(obj);

//Пример функции-конструктора, с которой такой код поведёт себя неправильно:

function Someconstructor() {
    this.isAdmin = false;
}

Someconstructor.prototype = {
    jumps: true
};

let obj = new Someconstructor();

let obj2 = new obj.constructor();

console.log(obj); //{isAdmin: false, jumps: true}

console.log(obj2); // {}
