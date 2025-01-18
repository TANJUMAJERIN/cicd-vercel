// const request = require('supertest');
// const app = require('../index'); // Adjust path if necessary

// describe('GET /', () => {
//     it('should return Hello, World!', async () => {
//         const res = await request(app).get('/');
//         expect(res.statusCode).toBe(200);
//         expect(res.text).toBe('Hello World');
//     });
// });
const request = require('supertest');
const app = require('../index'); // Import the app here

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});

// Close the server after the tests
afterAll(done => {
  app.close(done); // Ensure the server shuts down
});

