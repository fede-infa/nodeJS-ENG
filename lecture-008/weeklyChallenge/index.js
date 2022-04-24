
// Express
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

server.on("error", error =>{
    console.log(`Alert! ${error}`);
})


// File & Product class
const file = require('./modules/file');
const Product = require('./modules/product');

// Logic

app.get('/api/products', async (req, res) =>{
    try {
        const products = await file.read();
        if(!products){
            res.json({
                status: 'OK',
                msg: 'There is no products'
            })
        } else{
            res.json(products)
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/products/:id', async (req, res) =>{
    try {
        const products = await file.read();
        if(!products[req.params.id]){
            res.json({
                status: 'Error',
                msg: 'Product not found'
            });
        } else{
            res.json(products[req.params.id]);
        }
    } catch (error) {
        res.status(500).send(error);   
    }
});

app.post('/api/products', async (req, res) =>{
    try {
        const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
        res.send(await file.create(product));
    } catch (error) {
        res.status(500).send(error);
    }
});