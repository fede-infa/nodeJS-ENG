const http = require('http')
const {fork} = require('child_process')

let visitors = 0
const server = http.createServer()

server.on('request', (req, res) =>{
    let {url} = url
    if(url == '/calculator'){
        /* Creates a new child process, we add the route file */
        const calculation = fork('./calculation.js')
        calculation.send('start')
        calculation.on('message', sum =>{
            res.end(`The sum is ${sum}`)
        })
    }
})


server.listen(8080, err =>{
    if(err) throw Error('Error', err)
    console.log('http://localhost:8080')
})