
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);

router.get('/', (req, res) =>{
    res.send('Get request received');
});

router.post('/', (req, res) =>{
    res.send('Post request received');
});

app.listen(8080);