const express = require('express');
const app = express();

app.listen(8080, () =>console.log('http://localhost:8080'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/hello', (req, res) =>{
    res.render('hello.pug', {message: 'From server.js in layout.pug'});
});
