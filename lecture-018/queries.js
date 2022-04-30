

// To use an specific DB or to create one
/* use ecommerce */

db.item.insertMany([
    {
        "title": "Escuadra",
        "price": 100,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/draw-and-design/512/esquadra-2-128.png"
    },
    {
        "title": "Calculadora",
        "price": 1234.5,
        "thumbnail": "https://cdn4.iconfinder.com/data/icons/logistics-and-shipping-5/85/calculator_accounting_math-128.png"
    },
    {
        "title": "Manzana",
        "price": 400,
        "thumbnail": "https://cdn0.iconfinder.com/data/icons/graphorama-fruits-7/128/apple-128.png"
    },
    {
        "title": "Mouse",
        "price": 3000,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/unigrid-phantom-devices-vol-4/60/017_179_mouse_hardware-128.png"
    },
    {
        "title": "Teclado",
        "price": 150,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/software-hardware/200/software-24-128.png"
    },
    {
        "title": "Monitor",
        "price": 2300,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/business-271/135/36-128.png"
    },
    {
        "title": "Chocolate",
        "price": 300,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/bakery-kitchen-3/512/chocolate-sweet-candy-128.png",
    },
    {
        "title": "Taza",
        "price": 250,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/bistro-restaurant-part-i/64/bistro-and-restaurant_53-128.png",
    },
    {
        "title": "Microfono",
        "price": 3350,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/music-instrument-vol-2/512/microphone_recording_singing_studio-128.png",
    },
    {
        "title": "Cable USB",
        "price": 800,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/electronic-3/500/usb_cable-128.png",
    }
])

db.message.insertMany([
{"author":"Lucas@gmail.com","text":"Hola","fyh":"30/08/2021"},
{"author":"AmigoDeLucas@gmail.com","text":"Hola, Como va?","fyh":"30/08/2021"},
{"author":"Lucas@gmail.com","text":"Todo bien","fyh":"30/08/2021"},
{"author":"AmigoDeLucas@gmail.com","text":"Que bueno","fyh":"30/08/2021"},
{"author":"AmigoDeLucas@gmail.com","text":"La familia como anda?","fyh":"30/08/2021"},
{"author":"Lucas@gmail.com","text":"Bien por suerte, hace poco fue el cumple de mi hermano","fyh":"30/08/2021"},
{"author":"AmigoDeLucas@gmail.com","text":"Que bueno, cuantos cumplio?","fyh":"30/08/2021"},
{"author":"Lucas@gmail.com","text":"20","fyh":"30/08/2021"},
{"author":"AmigoDeLucas@gmail.com","text":"Como crecio, que locura","fyh":"30/08/2021"},
{"author":"Lucas@gmail.com","text":"Si, la verdad que si","fyh":"30/08/2021"}
])

db.item.find()
db.message.find()

db.item.count()
db.message.count()

db.item.insertOne({
    "title": "Robot de juguete",
    "price": "3500",
"thumbnail": "https://cdn2.iconfinder.com/data/icons/funtime-objects-part-1/60/005_008_robot_baby_friend_gift_present_samodelkin-128.png"
})

db.item.find({ price: { $lt: 1000 } }, { title: 1 })
db.item.find({ price: { $gt: 1000, $lt: 3000} }, { title: 1 })
db.item.find({ price: { $gt: 3000 } }, { title: 1 })
db.item.find({}, { title: 1}).sort({ price: 1 }).skip(2).limit(1)
db.item.updateMany({}, {$set: { stock: 100 }})
db.item.updateMany({ price: { $gt: 4000} }, {$set: { stock: 0 }})
db.item.deleteMany({ price: { $lt: 1000} })

db.createUser({
    user: 'pepe',
    pwd: 'asd456',
    roles: [
        { role: 'read', db: 'ecommerce' }
    ]
})