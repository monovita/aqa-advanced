const axios = require('axios');

const customHeaderValue = { 'Content-type': "ABC123_HEADER" };
const customParamsValue = { param1: "ABC123_PARAM" };
const mockedApi = axios.create();

function headersURL(){
return mockedApi.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            headers: customHeaderValue,
            params: customParamsValue,
        },
    );
}

test('Test Request Headers and Params', async () => {
  await new Promise((resolve, reject) => {
    mockedApi.interceptors.request.use((config) => {
      try {
        console.log(config.headers);
        expect(config.headers.get('Content-type')).toBe('ABC123_HEADER'); 
        console.log(config.params);
        expect(config.params).toEqual(customParamsValue);                  
        resolve();
      } catch (error) {
        reject(error); 
      }
      return config;
    });

    headersURL();
  });
});