const redisClient = require('./connection');

exports.cacheInfo = (req, res, next) =>{
    const {id} = req.params;
    // Look up into redis for data
    redisClient.get(id, (err, data) =>{
        if(err) throw err; // If there's an error, throw it
        if(data) res.json(JSON.parse(data)); // if there's data with that id, respond
        next(); // else go next()
    })
}