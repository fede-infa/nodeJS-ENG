// Variables y expresiones servidor
const express = require('express');
const app = express(); 
const routerApi = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;

// Importo modulos necesarios
const file = require('./modules/file');
const Product = require('./modules/products');

// Retorna JSON con todos los productos
routerApi.get('/products', async (req, res) =>{
    const productList = await file.read();
    if(!productList.length){
        res.send({error: 'There are no products'});
    } else{
        res.send(productList);
    }
});

// Retorna JSON el producto del id enviado
routerApi.get('/products/:id', async (req, res) =>{
    const productList = await file.read();
    const product = productList.find( product => product.id == req.params.id);
    if(!product){
        res.send({error: 'Product not found'});
    } else{
        res.send(product);
    }
});

// Guarda el producto enviado en el payload
routerApi.post('/products/', async (req, res) =>{
    const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
    res.send(await file.create(product));
})

// Borra un producto por ID
routerApi.delete('/products/:id', async (req, res) =>{
    const resultado = await file.delete(req.params.id);
    res.json( resultado );
    
})

// Actualiza un producto por ID
routerApi.put('/products/:id', async (req, res) =>{
    const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
    product.id = req.params.id;
    res.send( await file.update(product) );

})

// Configuracion del router API
app.use('/api', routerApi);

// Vista inicial
app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/public/index.html`);
})

// Se levanta server
const server = app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});

server.on('error', err =>{
    console.log(`Error en el servidor: ${err}`)
});