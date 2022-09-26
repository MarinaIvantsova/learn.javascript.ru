// fetch("https://httpbin.org/json")
//   .then(function (response) {
//     return response.json();
//   }).then(data => console.log(data.slideshow.title));
console.log(fetch('../promiseChain/github.json')
     .then(response => response.json())
     .then(user => fetch(`https://api.github.com/users/${user.login}`))
     .then(response => console.log(response))
    // .then(gitHubUser => {
    //     let img = document.createElement('img');
    //     img.src = gitHubUser.avatar_url;
    //     document.body.append(img);
    //     setTimeout(() => img.remove(), 3000);
    // })
    );