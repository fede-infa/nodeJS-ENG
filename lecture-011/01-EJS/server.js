const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`http:localhost:${PORT}`));

app.get('/', (req, res) =>{
    res.render('index', {message: 'EJS testing'});
});
