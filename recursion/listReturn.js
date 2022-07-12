/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//Мой способ(цикл):

// function printList(list) {
//     let arr= [];

//     let tmp = list;

//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }
//     let reversedArr = arr.reverse();
//     for ( let i = 0; i < reversedArr.length; i++) {
//         console.log(reversedArr[i]);
//     }

// }

//Авторский способ(цикл):

// function printList(list) {
//     let arr = [];
//     let tmp = list;

//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }

// }

// console.log(printList(list));

//Через рекурсию:

function printList(list) {

    if (list.next) {
        printList(list.next);
    }

    console.log(list.value);
}

console.log(printList(list));
