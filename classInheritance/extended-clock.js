class ExtendedClock extends Clock {

    constructor({ template }, precision = 5000) {
      super({ template });
      this.precision = precision;
    }
    start() {
        this.render(); //Почему нужно вызвать render? Недостаточно его на 9 строке?
        this.timer = setInterval(() => this.render(), this.precision);
      }
    
  }

let clock = new ExtendedClock({template: 'h:m:s'});
clock.start();//здесь мы переопределили родительсикй метод start?
