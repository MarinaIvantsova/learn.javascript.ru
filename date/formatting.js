/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {

  let diff = new Date() - date;

  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return `${sec} секунд назад`;
  }

  let min = sec / 60;

  if (min < 60) {
    return `${min} минут назад`;
  }

  let arr = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '' + date.getFullYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes(),
  ];

  let mapped = arr.map((elem) => {
    return elem.slice(-2);
  });

  return mapped.slice(0, 3).join('.') + ' ' + mapped.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000)));
