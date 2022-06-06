const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('<h1>Hola Server 2 on port 8081</h1>')
})

app.listen(8081, () =>{
    console.log(`http://localhost:8081`)
})