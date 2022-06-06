const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('<h1>Hola Server 1 on port 8080</h1>')
})

app.listen(8080, () =>{
    console.log(`http://localhost:8080`)
})