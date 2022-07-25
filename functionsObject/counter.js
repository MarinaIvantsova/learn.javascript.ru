function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => (count = value);

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter.set(10)); // установить новое значение счётчика

console.log(counter()); // вернул 10, но изменил на 11

console.log(counter.decrease()); // уменьшил 11 на один, но вернул 11

console.log(counter()); // вернул 10, но изменил на +1
console.log(counter()); // вернул 11, но изменил на +1
