/*Переведите текст вида border-left-width в borderLeftWidth

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

Decision №1.

let camelize = (str) => {
  let splitted = str.endsWith('-') ? str.slice(0, -1).split('') : str.split('');
  let strJoin = splitted.join('');

  splitted.forEach((element, index) => {
    if (element === "-") {
      splitted.splice(index, 2, splitted[index + 1].toUpperCase());
      strJoin = splitted.join('');
    }
  });

  return strJoin;
}

console.log(camelize("le-id"));
*/

// Decision №2.
function camelize(str) {
  let splitted = str.endsWith('-') ? str.slice(0, -1).split('-') : str.split('-');
  return splitted
    .map((element, index) => index === 0 ? element : element[0].toUpperCase() + element.slice(1))
    .join('');
}

console.log(camelize("le-im-"));
