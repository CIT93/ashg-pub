const todoPush = document.getElementById('pushTodos');

document.getElementById('pulltodos').addEventListener('click', () => {
  pullTodos()
    .then((todos) => {
      console.log(todos);
      pulledTodos(todos)
    .catch((error) => {
      console.log('Argh! There be an Error!', error);
    });
});

const pulledTodos = (data) => {
  todoPush.innerHTML = '';
  data.forEach((todo) => {
  const createDiv = document.createElement('div');
  createDiv.innerHTML = `ID: ${todo.userId} -- Title: ${todo.title}`;
  todoPush.appendChild(createDiv);
    })}})