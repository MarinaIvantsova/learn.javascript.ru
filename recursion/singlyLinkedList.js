/*
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):


Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
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

//Через цикл:

function printList(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }

}

//Через рекурсию

function printList(list) {

    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }

}

console.log(printList(list));
