
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

app.post('/api/message', (req, res) =>{
    let msg = req.body;
    console.log(msg);
    res.json({
        id: Math.floor(Math.random()),
        request: msg
    });
});

app.put('/api/message/:id', (req, res) =>{
    res.json({
        result: 'ok',
        id: req.params.id,
        new: req.body
    });
});

app.delete('/api/message/:id', (req, res) =>{
    return res.json({msg: 'Deleted', id: req.params.id});
});