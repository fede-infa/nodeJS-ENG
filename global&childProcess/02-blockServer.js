const http = require('http')

function calculation(){
    let sum = 0
    for(i=0; i<6e9;i++){
        sum += i
    }
    return sum
}

let visitors = 0

const server = http.createServer()

server.on('request', (req, res) =>{
    let {url} = req
    if(url == '/calculator'){
        const sum = calculation()
        res.end(`The sum is ${sum}`)
    } else if(url == '/'){
        res.end('Ok: ' + (++visitors))
    }
})

server.listen(8080, err =>{
    if(err) throw Error('algo falla', err)
    console.log('http://localhost:8080')
})