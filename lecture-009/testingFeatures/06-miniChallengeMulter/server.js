const express = require('express');
const multer = require('multer');

const app = express();
const server = app.listen(8080, () => console.log(`Server is up http://localhost:8080`));
const publicRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

//Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});

const upload = multer({ storage: storage });

// Save image
app.post('/uploadfile', upload.single('imgsingle'), (req, res, next) =>{
    const file = req.file;
    console.log(file);
    if(!file){
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(`File <b>${file.originalname}</b> saved`);
})