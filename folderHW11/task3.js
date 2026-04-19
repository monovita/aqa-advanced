async function todosCall() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Todo error:', error);
  }
}

async function usersCall() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('User error:', error);
  }
}

const promisesCollection = [todosCall(), usersCall()];

const promiseAll = () => { 
Promise.all(promisesCollection)
  .then(([todo, user]) => console.log('All Fulfilled:', todo, user))
  .catch(x => console.log('All Rejected: ', x))
}

const promiseRace = () => { 
Promise.race(promisesCollection)
  .then(x => console.log('Race Fulfilled: ', x))
  .catch(x => console.log('Race Rejected: ', x))
}

promiseAll();
promiseRace();