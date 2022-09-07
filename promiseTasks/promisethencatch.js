let promise1 = new Promise((resolve, reject) => {
    resolve("SUCCESS");
});
let promise2 = new Promise((resolve, reject) => {
    reject("Error");
});

promise1
    .then((value) => {
        console.log(value);
    })
    .finally(() => {
        console.log("promise 1 finally");
    });

promise2
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("promise 2 finnally");
    });
