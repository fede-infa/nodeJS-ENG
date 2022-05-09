const redis = require('redis');
require('dotenv').config();

const client = redis.createClient(
    11576,
    'redis-11576.c228.us-central1-1.gce.cloud.redislabs.com');


client.auth(process.env.REDIS_PSWD, (err) =>{
    if(err) throw err;
})

client.on('error', err =>{
    console.log(`Alert!`, error);
})

client.on('connection', ()=>{
    console.log('Connection established');
})

module.exports = client;
