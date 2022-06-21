/*Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
 потом переделайте всё как нужно и методом join соедините обратно.*/

 let camelize = (str) => {
   let splitted = str.endsWith('-') ? str.slice(0, -1).split('') : str.split('');
    splitted.forEach((element, index) => {
      if (element.includes("-")) {
         splitted.splice(index, 2, splitted[index + 1].toUpperCase());
      } 
    });
    return splitted.join("");
 }
 console.log(camelize("-webkit-transition-"));