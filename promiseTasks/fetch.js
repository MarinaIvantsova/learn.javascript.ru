//https://jsonplaceholder.typicode.com/

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

fetch("https://jsonplaceholder.tyicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err.message));
  