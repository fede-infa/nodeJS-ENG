
/* FOREVER COMMANDS

forever start
forever start -w server.js PORT
forever list
forever stop id
forever stopall
forever --help
*/

const http = require('http')

const PORT = process.argv[2] || 8080

console.log(PORT)

http.createServer((req, res) =>{
    res.writeHead(200)
    res.end(`server on http://localhost:${PORT} - PID: ${process.pid} - ${new Date().toLocaleString()}`)
}).listen(PORT)

