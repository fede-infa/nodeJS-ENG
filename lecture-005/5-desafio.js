const HTTP = require('http');
const PORT = 3000;

const SERVER = HTTP.createServer( (req, res) =>{
    res.end(JSON.stringify({
        id: randomNumber(1,10,0),
        title: `Product ${randomNumber(1,10,0)}`,
        price: randomNumber(0,10000,2),
        thumbnail: `Photo ${randomNumber(1,10,0)}`

    }));
});

const randomNumber = (min, max, decimals) => {
    return (Math.random() * (max - min) + min).toFixed(decimals);
}

SERVER.listen(PORT, () =>{
    console.log(`Server is up: http://localhost:${PORT}`);
})
