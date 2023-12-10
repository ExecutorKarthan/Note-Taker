// Import Required modules for server management, pathing and routes
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Allow for server to generate a port or set a default port.
const PORT = process.env.PORT || 3001;

// Define express variable
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish static url link for ease of use
app.use(express.static('public'));

//Establish api link to handle routing
app.use('/api', api);

// Create rout=es for navigation to index, notes and redirect all 404-creating request to the homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Set listening port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
