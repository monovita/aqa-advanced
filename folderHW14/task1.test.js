const axios = require('axios');

test('GET todos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.userId).toBe(1);
});

test('GET posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data[1].title).toContain("qui est esse");
});

test('POST post', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
{
    title: 'foo',
    body: 'bar',
    userId: 1,
},
{
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
);
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data.title).toContain("foo");
});

test('PUT post', async () => {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1',
{
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
},
{
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
);
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.body).toContain("bar");
});

test('DELETE post', async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
});