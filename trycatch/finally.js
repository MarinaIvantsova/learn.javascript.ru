/*
Сравните два фрагмента кода.

Первый использует finally для выполнения кода после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  очистить рабочее пространство
}
Второй фрагмент просто ставит очистку после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
}

очистить рабочее пространство
Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.

Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы?
Если такое преимущество есть, то дайте пример, когда оно проявляется.
*/

/*
Ответ:
Да, есть преимущество  в использовании finally.
Когда есть return внутри try..catch.
Секция finally работает в любом случае при любом выходе из try..catch,
даже через return: сразу после того как try..catch выполнится.
*/
function f() {
    try {
        alert('начало');
        return "result";
    } catch (e) {
        /// ...
    } finally {
        alert('очистка!');
    }
}

f(); // очистка!

//Или когда есть throw:

function f() {
    try {
        alert('начало');
        throw new Error("ошибка");
    } catch (e) {
        // ...
        if ("не могу обработать ошибку") {
            throw e;
        }

    } finally {
        alert('очистка!')
    }
}

f(); // очистка!
//finally гарантирует очистку. Если мы просто поместим код в конце f, то он не выполнится в данных условиях.
