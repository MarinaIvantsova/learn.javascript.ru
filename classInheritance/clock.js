/*
У нас есть класс Clock. Сейчас он выводит время каждую секунду
Создайте новый класс ExtendedClock,
который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками».
Установите значение в 1000 (1 секунда) по умолчанию.

Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.
*/

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date(); //Дата на текущий момент
  
      let hours = date.getHours(); //Кол-во часов на текущий момент
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes(); //Кол-во минут на текущий момент
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds(); //Кол-во секунд на текущий момент
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
