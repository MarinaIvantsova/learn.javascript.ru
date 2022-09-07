async function fetchTodos(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log(err.message);
    }
  }
  
  fetchTodos("https://jsonplaceholder.typicode.com/todos");
  