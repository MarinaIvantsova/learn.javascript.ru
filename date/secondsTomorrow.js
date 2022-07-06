/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    let nowTime = new Date();

    let tomorrow = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate() + 1);

    let res = (tomorrow - nowTime);

    return Math.round(res / 1000);
}

console.log(getSecondsToTomorrow());
