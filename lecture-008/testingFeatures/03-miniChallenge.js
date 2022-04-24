
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(8080, () =>{
    console.log(`Server is up http://localhost:8080`);
});

server.on("error", err =>{
    console.log(err);
});

// We assume that the data is entered correctly
app.get('/api/sum', (req, res) =>{
    let {num1, num2} = req.query;
    res.json(`The result of the sum is: ${Number(num1) + Number(num2)}`);
});

app.get('/api/sum/:num1/:num2', (req, res) =>{
    let {num1, num2} = req.params;
    res.json(`The result of the sum is: ${Number(num1) + Number(num2)}`);
});

app.get('/api/operation/:mathOp', (req, res) =>{
    let result = eval(req.params.mathOp);
    res.send(`The result is: ${result}`);
});