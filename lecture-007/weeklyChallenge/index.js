
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

const views = {
    items: 0,
    itemRandom: 0
};


const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getProducts(){
    const products = fs.readFileSync('products.json', 'utf-8');
    return JSON.parse(products);
}

app.get('/', (req, res) =>{
    res.send(`<h1 style = "color: red"> Front page </h1>`)
});

app.get('/items', (req, res) =>{
    const products = getProducts();
    const outputData = [{
        products: products,
        totalProducts: products.length 
    }];
    ++views.items;
    res.json(outputData);
});

app.get('/item-random', (req, res) =>{
    const products = getProducts();
    ++views.itemRandom;
    res.json({
        product: products[getRandomNumber(0,products.length)]
    });
});

app.get('/views', (req, res) =>{
    res.json(views)
})


server.on('error', error =>{
    console.log(`We had an issue ${error}`);
});
