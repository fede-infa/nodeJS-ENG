//HTTP Module
// Hyper Text Transfer Protocol
// It works to do our own HTTP server

const http = require('http');
const PORT = 3000;

const server = http.createServer( (request, response) =>{
    response.end(JSON.stringify({state: 200, msg: 'Hallo!'}));
});

server.listen(3000, () =>{
    console.log(`The server is up: http://localhost:${PORT}`);
})