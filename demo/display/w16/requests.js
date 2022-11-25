const pullTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (response.status === 200) {
    const pullTodos = await response.json();
    return pullTodos;
  } else {
    throw new Error('Yargh! Errors be afoot, Captain!');
  }
};

  response.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback(
        'ARGH! There be an error, captain!',
        undefined
      );
    }
  });

  response.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  response.send();
;