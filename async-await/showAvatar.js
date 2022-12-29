async function showAvatar(url) {
	// запрашиваем JSON с данными пользователя
	let response = await fetch('../promiseChain/github.json');
	let user = await response.json();

	// запрашиваем информацию об этом пользователе из github
	let githubResponse = await fetch(`https://api.github.com/users/${user.login}`);
	let gitHubUser = await githubResponse.json();

	// отображаем аватар пользователя
	let img = document.createElement('img');
	img.src = gitHubUser.avatar_url;
	img.className = 'promise-avatar-example';
	document.body.append(img);

	// ждём 3 секунды и затем скрываем аватар
	await new Promise(resolve => setTimeout(resolve, 3000));

	img.remove();

	return gitHubUser;
}

showAvatar();
