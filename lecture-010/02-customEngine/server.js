const express = require('express');
const app = express();
app.use(express.static('public'));
const fs = require('fs');


//Server
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server is up http://localhost:${PORT}`));
server.on('error', error =>console.log(`Alert!: ${error}`));


// Template engine
app.engine('ntl', (filepath, options, callback) =>{
    fs.readFile(filepath, (err, content) =>{
        if(err){
            return callback(err);
        }
        let rendered = content.toString().replace('#title#', '' + options.title + '').replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    });
});

app.set('views', './views') // Directory of the views
app.set('view engine', 'ntl') // Specify the template engine to use

app.get('/', (req, res) =>{
    res.render('index', {title: 'Hallo', message: 'Wilkommen'});
});