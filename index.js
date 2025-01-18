
const express = require('express');
const app = express();
//const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
module.exports = app; 
// let server;

// if (process.env.NODE_ENV == 'test') {
//   // Only start the server if not in test environment
//   server = app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }

// module.exports = { app, server }; // Export app and server for tests
/////jikjn

// //cc
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// module.exports = app; 