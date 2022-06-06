const fs = require('fs'),
    readStream = fs.createReadStream('./assets/names.txt')
    writeStream = fs.createWriteStream('./assets/names_copy.txt')

    
// Mientra haya datos
readStream
    .pipe( writeStream )
    .on('end', () =>{
        console.log('Read finished')
    })
    .on('data', (chunck) =>{
        console.log('I read ', chunck.length, ' characters')
    })
