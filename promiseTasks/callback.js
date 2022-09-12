// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback();
//     document.body.append(script);
//   }                                                                                                                                             

//   loadScript("../promiseTasks/script.js", function() {
//     newFunction();
//   });


//Возьмём для примера реальный скрипт с библиотекой функций:

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    // alert(_); // функция, объявленная в загруженном скрипте
    loadScript('../promiseTasks/script.js', script => {
    alert(`Здорово, второй скрипт ${script.src} загрузился`);
    })
});

/*
Такое написание называют асинхронным программированием с использованием колбэков.
В функции, которые выполняют какие-либо асинхронные операции,
передаётся аргумент callback — функция, которая будет вызвана по завершению асинхронного действия.
*/
