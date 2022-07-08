// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
// Способ 1
// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

// let jsonObj = JSON.stringify(user);

// let parseToObj = JSON.parse(jsonObj);

// console.log(jsonObj);
// console.log(parseToObj);

//Способ 2
let user = {
    name: "Василий Иванович",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user2);
