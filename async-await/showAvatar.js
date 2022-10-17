async function showAvatar(url) {
// запрашиваем JSON с данными пользователя
let response = await fetch('../promiseChain/github.json');
let user = await response.json();
}

showAvatar();