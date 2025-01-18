// const express = require('express');
// const app = express();

// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hellooo World');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app; // Export the app for use in tests
