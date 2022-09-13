//Функция вызывается  с задержкой
// function delay(ms, callback) {
//   setTimeout(callback, ms);
// }

// delay(5000, () => {
//   console.log("timeouted function");
// });

//Если в ф-и ошибка, то обработать ее можно с помощью try catch
// function delay(ms, callback) {
//   setTimeout(callback, ms);
// }

// delay(3000, () => {
//   try {
//     console.log("timeouted function");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

//Чтобы не писать в каждой переданной ф-и try, catch, мы можем ф-ю delay промифицировать

function delay1(ms, callback) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback());
      }, ms);
    });
  }
  
  delay1(2000, () => {
    console.log("timeouted func");
  }).catch((err) => console.log(err.message));
  