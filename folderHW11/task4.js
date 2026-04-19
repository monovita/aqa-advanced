class Endpoint {
  constructor(url) {
    this.url = url;
  }

  async urlCall() {
    try {
      const response = await fetch(this.url); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

const todoEndpoint = new Endpoint('https://jsonplaceholder.typicode.com/todos/1');
const userEndpoint = new Endpoint('https://jsonplaceholder.typicode.com/users/1');

class PromiseType {
  constructor(promisesCollection) {
    this.promisesCollection = promisesCollection;
  }

  promiseAll() {
    Promise.all(this.promisesCollection)
      .then(([todo, user]) => console.log('All Fulfilled:', todo, user))
      .catch(x => console.log('All Rejected:', x));
  }

  promiseRace() {
    Promise.race(this.promisesCollection)
      .then(x => console.log('Race Fulfilled:', x))
      .catch(x => console.log('Race Rejected:', x));
  }
}

const promisesCollection = [todoEndpoint.urlCall(), userEndpoint.urlCall()]; 

const promises = new PromiseType(promisesCollection);
promises.promiseAll();
promises.promiseRace();