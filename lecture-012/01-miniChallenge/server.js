const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('index');
});

io.on('connect', (socket) => {
  console.log('New user connected!');
  socket.on('inputMessage', data =>{
    io.sockets.emit('newContent', data);
  });
});

server.listen(8080, () => {
  console.log('listening on http://localhost:8080');
});