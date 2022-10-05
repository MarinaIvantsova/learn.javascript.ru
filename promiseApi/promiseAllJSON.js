//Получить данные польщователей с гитхаб акаунтов

let names = ['iliakan', 'remy', 'jeresig', 'MarinaIvantsova'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests).then(responses => Promise.all(responses.map(response => response.json())))
.then(users => users.forEach(user => console.log(`${user.name}`)))
