const todosCall = () => {
return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
};

const usersCall = () => {
return fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
};

const promisesCollection = [todosCall(), usersCall()];

const promiseAll = () => { 
Promise.all(promisesCollection)
  .then(([todo, user]) => console.log('All Fulfilled:', todo, user))
  .catch(x => console.log('All Rejected: ', x));
};

const promiseRace = () => { 
Promise.race(promisesCollection)
  .then(x => console.log('Race Fulfilled: ', x))
  .catch(x => console.log('Race Rejected: ', x));
};

promiseAll();
promiseRace();