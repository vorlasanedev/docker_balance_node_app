// Import the Express module
const express = require('express');
const os = require('os')

// Create an Express application
const app = express();

// Define a port to listen on
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
//   res.send('Hello, World!');
res.json({message: "respone from:", hostname: `${os.hostname}`})
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
