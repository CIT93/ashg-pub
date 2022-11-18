document.getElementById('pulltodos').addEventListener('click', (e) => {
    pullTodos((error, todos) => {
        if (error) {
          console.log(error);
        } else {
          console.log(todos);

const pulledTodos = document.querySelector('#pulledTodos');
    todos.forEach((todo) => {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `User ID: ${todo.userId} -- Title: ${todo.title}`;
    if (todo.completed) {
        pulledTodos.appendChild(createDiv);
    } else {
        pulledTodos.appendChild(createDiv);
    }
      
});}});});
  