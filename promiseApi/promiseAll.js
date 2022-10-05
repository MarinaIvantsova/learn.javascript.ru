/*
1. Создать массив промисов с помощью map
2. От полученого массива промисов, а именно объектов класса Response получить url и status каждого объекта.
*/
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
    'https://api.github.com/users/MarinaIvantsova'
  ];

  let requests = urls.map(url => fetch(url));
  
Promise.all(requests).then(responses => responses.forEach(response => {
    console.log(`${response.url}: ${response.status}`)
  }));

