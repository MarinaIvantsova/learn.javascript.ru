/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

//setInterval

// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function () {
//         console.log(current);
//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000)
// }

//setTimeout

function printNumbers(from, to) {
    let current = from;

     setTimeout(function go() {
       console.log(current);
       if(current < to){
            setTimeout(go, 1000)      
        }
        current++;
    });
  }
  printNumbers(1, 5);
  
//setInterval, но ф-я go работает сразу без задержки

  function printNumbers(from, to) {
    let current = from;
    function go() {
      console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }
    go();

    let timerId = setInterval(go, 1000)
}

printNumbers(1,5);
