Promise.all([
    new Promise(resolve => setTimeout(() => {
        resolve(1);
        console.log(1);
    }, 3000)), // 1
    new Promise(resolve => setTimeout(() => {
        resolve(2);
        console.log(2);
    }, 2000)), // 2
    new Promise(resolve => setTimeout(() => {
        resolve(3);
        console.log(3);
    }, 1000))  // 3
  ]).then(console.log);
