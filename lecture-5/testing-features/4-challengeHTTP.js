
const http = require('http');
const PORT = 8080;

let request = {
    id: 1,
    user: 'Kyuse',
    hour: 8
}
const server = http.createServer( (request, response) => {
    if(request >= 6 && request <= 12){
        response.end('Guten Morgen!');
    } else if(request > 12 && request <= 19){
        response.end('Guten Abend!');
    } else {
        response.end('Gute Nacht!');
    }
});

server.listen(PORT, () => {
    console.log(`Server is up!... http://localhost:${PORT}`);
});
