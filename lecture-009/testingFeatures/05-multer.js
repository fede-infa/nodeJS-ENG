
const express = require('express');
const app = express();
const multer = require('multer');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(8080, () => console.log(`Server is up http://localhost:8080`));

app.use(express.static(__dirname + '/public'));

// Multer is a middleware of Express, it helps to load files

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/public/multer.html`)
});

//SET STORAGE
let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + '-' + Date.now())
    }
});

let upload = multer({storage: storage});


