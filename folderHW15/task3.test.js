const axios = require('axios');

jest.mock('axios');

function mockedURL() {
	return axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => response.data);
}

test('Mocked successful GET request', async () => {
	const mockData = [{ id: 1, title: 'sunt aut facere' }];

	axios.get.mockResolvedValue({ data: mockData });

	const response = await mockedURL();

	expect(response[0].title).toContain('sunt aut facere');
});

test('Mocked failed GET request', async () => {
	axios.get.mockRejectedValue(new Error('Network Error'));

	await expect(mockedURL()).rejects.toThrow('Network Error');
});
