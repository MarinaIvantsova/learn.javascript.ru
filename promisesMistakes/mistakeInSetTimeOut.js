/*
Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

Ответ:

Нет. catch сработает синхронно, последовательно, когда через 1 с случится ошибка, catch уже ее не обработает ее.
*/

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

//А что сделать, чтобы поймать эту ошибку?

new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error("Whoops!"));
    }, 1000);
}).catch(alert);
