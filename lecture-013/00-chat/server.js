const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080, () => console.log(`http://localhost:8080`));

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let messages = [
    {author: 'Fede', text: 'Hello!'},
    {author: 'Seba', text: 'Hey! How are you?'},
    {author: 'Fede', text: 'I am good, and you?'},
];

io.on('connection', socket =>{
    console.log(`A new client has connected`);
    socket.emit('messages', messages);

    socket.on('new-message', data =>{
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});


