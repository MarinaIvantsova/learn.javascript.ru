/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {

    let nowTime = new Date();

    let today = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate());

    let res = (nowTime - today);

    return Math.round(res / 1000);
}

console.log(getSecondsToday());

//Второй способ

function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  }
