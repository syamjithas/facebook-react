// A mock function to mimic making an async request for data
export function fetchTodo(page = 1) {
  return new Promise((resolve) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        resolve({ data: json });
      });
  });
}
