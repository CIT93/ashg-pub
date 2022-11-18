document.getElementById('pulltodos').addEventListener('click', (e) => {
    pullTodos((error, todos) => {
        if (error) {
          console.log(error);
        } else {
          console.log(todos);

const pulledTodos = document.querySelector('#pulledTodos');
    todos.forEach((todo) => {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `ID: ${todo.userId} -- Title: ${todo.title}`;
    pulledTodos.appendChild(createDiv);
      })}})})