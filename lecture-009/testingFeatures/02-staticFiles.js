
// We use a public folder to leave all our static files

const express = require('express');
const app = express();

app.listen(8080);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));

// __dirname give us the route to get to THIS file
app.use('/static', express.static(__dirname + '/public'));