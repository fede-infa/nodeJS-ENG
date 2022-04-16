
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

const visits = {
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
    ++visits.items;
    res.json(outputData);
});

app.get('/item-random', (req, res) =>{
    const products = getProducts();
    ++visits.itemRandom;
    res.json({
        product: products[getRandomNumber(0,products.length)]
    });
});

app.get('/visits', (req, res) =>{
    res.json(visits)
})


server.on('error', error =>{
    console.log(`We had an issue ${error}`);
});
