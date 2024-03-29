/*
Промисы: сравните then и catch
Являются ли фрагменты кода ниже эквивалентными?
Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

promise.then(f1).catch(f2);
Против:

promise.then(f1, f2);


Ответ:

Нет.

Если ошибка произойдёт в f1, то она будет обработана в .catch в этом примере:

promise
  .then(f1)
  .catch(f2);
  
Но не в этом:

promise
  .then(f1, f2);
Ошибка передаётся по цепочке, но во втором примере нет продолжения цепочки после f1.

.then передаёт результат или ошибку следующему блоку .then/catch.
Так как в первом примере в цепочке далее имеется блок catch, а во втором – нет, то ошибка в нём останется необработанной.
*/
