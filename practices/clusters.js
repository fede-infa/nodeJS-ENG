const express = require('express')
const cluster = require('cluster')
const { clearScreenDown } = require('readline')

const app = express()

const numCPUs = require('os').cpus().length


if(cluster.isMaster){
    console.log(numCPUs)
    console.log(`PID MASTER ${process.pid}`)

    // For each core, create a child
    for(let i = 0; i < numCPUs; i++){
        cluster.fork() 
    }

    // When a child dies, a new one is constructed depending on the cores of the CPU
    cluster.on('exit', worker =>{
        console.log('worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
} else {
    /* If i'm not in master  */
    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req,res) =>{
        console.log(``)
    })

    app.listen(PORT, err =>{
        if(!err) console.log(`Express server on port ${PORT} PID Worker ${process.pid} - ${new Date().toLocaleString()}`)
    })
}
