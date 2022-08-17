/*
Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
*/

/*
Ответ:

instanceof не учитывает саму функцию при проверке, а только prototype,
который проверяется на совпадения в прототипной цепочке.

И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.
*/
