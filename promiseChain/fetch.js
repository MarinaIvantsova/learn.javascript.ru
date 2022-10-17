// Загрузка аватара с гитхаб профиля

// fetch("https://httpbin.org/json")
//   .then(function (response) {
//     return response.json();
//   }).then(data => console.log(data.slideshow.title));
// fetch('../promiseChain/github.json')
//      .then(response => response.json())
//      .then(user => fetch(`https://api.github.com/users/${user.login}`))
//      .then(response => response.json())
//     .then(gitHubUser => new Promise(function(resolve, reject) {
//         let img = document.createElement('img');
//         img.src = gitHubUser.avatar_url;
//         document.body.append(img);
//         setTimeout(() => {
//             img.remove();
//             return resolve(gitHubUser);
//         }, 3000);
//     })).then(gitHubUser => console.log(`Закончили показ пользователя: ${gitHubUser.name}`));

function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.githb.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(gitHubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = gitHubUser.avatar_url;
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            return resolve(gitHubUser);
        }, 3000);
    })
}

loadJson('../promiseChain/github.json')
    .then((user) => loadGithubUser(user.login))
    .then(showAvatar)
    .then((gitHubUser) => console.log(`Завершен показ пользователя: ${gitHubUser.name}`))
    .catch(error => console.log(error.message));
