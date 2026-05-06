const axios = require('axios');

function invalidURL(){
 return axios.get ('https://jsonplaceholder.typicode.com/posts1/1');
}

test("Check invalid URL", async () => {
    try {
        await invalidURL();
    }
    catch (error) {
        console.log(error.response.status);
        expect(error.message).toBeTruthy();
        expect(error.code).toBe('ERR_BAD_REQUEST');
    }; 
});