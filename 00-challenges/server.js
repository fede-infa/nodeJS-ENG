import express from 'express'
import http from 'http'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()

app.use(cookieParser())
app.use(session({
    secret: 'superSEcreT_haSH',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
}))

const getSessionName = req => req.session.name? req.session.name: ''

const server = http.Server(app)

import { Server as Socket } from 'socket.io'
const io = new Socket(server)

import handlebars from 'express-handlebars'
import Product from './api/product.js'
import Message from './api/message.js'
import { MongoDB } from './db/db.js'

let products = new Product()
let messages = new Message()

import { getProdRandom } from './mockData/product.js'

//--------------------------------------------
//establecemos la configuración de handlebars
app.engine(
    "hbs",
    handlebars({
      extname: ".hbs",
      defaultLayout: 'index.hbs',
    })
);
app.set("view engine", "hbs");
app.set("views", "./views");
//--------------------------------------------

app.use(express.static('public'))

/* -------------------------------------------------------- */
/* ----------------- USER LOGIN y LOGOUT  ----------------- */
/* -------------------------------------------------------- */
app.use(express.urlencoded({extended: true}))

app.get('/login', (req,res) => {
    console.log(req.session.name);
    if(req.session.name) {
        res.render("home", {
            name: req.session.name
        })
    }
    else {
        res.sendFile(process.cwd() + '/public/login.html')
    }
})

app.post('/login', (req,res) => {
    let { name } = req.body
    req.session.name = name
    res.redirect('/')
})

app.get('/logout', (req,res) => {
    let name = getSessionName(req)
    if(name) {
        req.session.destroy( err => {
            if(!err) res.render("logout", { name })
            else res.redirect('/')
        })
    }
    else {
        res.redirect('/')
    }
})


/* -------------------------------------------------------- */

const router = express.Router()
app.use('/api', router)

router.use(express.json())
router.use(express.urlencoded({extended: true}))


router.get('/product', async (req,res) => {
    res.json(await products.getAll())
})

router.get('/product/:id', async (req,res) => {
    let { id } = req.params
    res.json(await products.getOne(id))
})

router.post('/product', async (req,res) => {
    let product = req.body
    await products.create(product)
    res.json(product)
    //res.redirect('/')
})

router.put('/product/:id', async (req,res) => {
    let { id } = req.params
    let product = req.body
    await products.update(product,id)
    res.json(product)
})

router.delete('/product/:id', async (req,res) => {
    let { id } = req.params
    let product = await products.delete(id)
    res.json(product)
})

router.get('/product/view', async (req, res) => {
    let products = await products.listarAll()

    res.render("view", {
        products: products,
        product_qty: products.length
    })
})

router.get('/product/view-test', async (req, res) => {

    let quantity = req.query.cant || 10
    let products = []
    for(let i=0; i<quantity; i++) products.push(getProdRandom(i+1))

    //console.log(prods)
    res.render("view", {
        products: products,
        product_qty: products.length
    })
})

/* -------------------- Web Sockets ---------------------- */
io.on('connection', async socket => {
    console.log('New connection websockets!');
    
    /* Emit products on connection */
    socket.emit('products', await products.getAll());

    /* Update products when a new one is created */
    socket.on('update', async data => {
        if(data = 'ok') {
            io.sockets.emit('products',  await products.getAll()); 
        }
    })

    /* Chat */
    socket.emit('messages', await messages.getAll());

    socket.on('new-message', async function(data) {
        await messages.create(data);
        const chatMessages = await messages.getAll();
        console.log(chatMessages);
        io.sockets.emit('messages', chatMessages);
    })    
});

/* ------------------------- SERVER --------------------------------- */
const PORT = process.env.PORT || 8080;
const srv = server.listen(PORT, async () => {
    console.log(`${srv.address().port}`)
    try {
        const mongo = new MongoDB('mongodb://localhost:27017/test_features')
        await mongo.connect()
        console.log('Connection to DB succeded!')
    }
    catch(error) {
        console.log(`Error on DB connection: ${error}`)
    }
})
srv.on("error", error => console.log(`Error on server`, error))
