/*
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.
*/

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();

        let fixedHours = String(hours).padStart(2, "0");

        let mins = date.getMinutes();

        let fixedMins = String(mins).padStart(2, 0);

        let secs = date.getSeconds();

        let fixedSecs = String(secs).padStart(2, "0");

        let output = this.template
            .replace('h', fixedHours)
            .replace('m', fixedMins)
            .replace('s', fixedSecs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
