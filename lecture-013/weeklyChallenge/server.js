// Express
const express = require('express');
const app = express(); 
const routerApi = express.Router();

// Socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);

// Server express
const PORT = 8080;
/* const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
}); */

server.listen(PORT, () => console.log(`Server is up http://localhost:${PORT}`));

server.on('error', err =>{
    console.log(`Error en el servidor: ${err}`)
});

// App config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static(__dirname + '/public'))
app.use('/api', routerApi); // Router API
app.set('view engine', 'ejs');


// My modules
const file = require('./modules/file');
const Product = require('./modules/products');

// JSON with all products
routerApi.get('/products', async (req, res) =>{
    const productList = await file.read();
    if(!productList.length){
        res.send({error: 'There are no products'});
    } else{
        res.send(productList);
    }
});

// JSON with product from ID
routerApi.get('/products/:id', async (req, res) =>{
    const productList = await file.read();
    const product = productList.find( product => product.id == req.params.id);
    if(!product){
        res.send({error: 'Product not found'});
    } else{
        res.send(product);
    }
});

// Create a product
routerApi.post('/products/', async (req, res) =>{
    const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
    res.send(await file.create(product));
})

// Delete a product
routerApi.delete('/products/:id', async (req, res) =>{
    const resultado = await file.delete(req.params.id);
    res.json( resultado );
    
});

// Update a product
routerApi.put('/products/:id', async (req, res) =>{
    const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
    product.id = req.params.id;
    res.send( await file.update(product));
});

// Index.html
app.get('/', (req, res) =>{
    res.render('index');
});

// Products table
app.get('/products/view', async(req, res) =>{
    const productList = await file.read();
    res.render('products', {products: productList});
});

const listMessages = [];
// Socket connection
io.on('connection', async (socket) =>{
    console.log('User connected');
    const products = await file.read();
    io.sockets.emit('productList', products);

    // Chat feature
    socket.on('chat:new-message', (data) =>{
        listMessages.push(data);
        io.sockets.emit('chat:messages', listMessages);
    });
});


