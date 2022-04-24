
const express = require('express');
const app = express();

app.use(express.static('public'))

// Server
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server is up http://localhost:${PORT}`));
server.on('error', error => console.log(`Alert!: ${error}`));

