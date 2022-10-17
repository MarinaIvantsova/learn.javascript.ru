async function showAvatar(url) {
// запрашиваем JSON с данными пользователя
let response = fetch(url);
(await response).json();
}

showAvatar('../promiseChain/github.json');