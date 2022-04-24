
const fs = require('fs');

fs.readFile('./files.txt', 'utf-8', (err, res) =>{
    if(err){
        console.log('Alert!', err);
    } else{
        console.log('Finished!', res);
    }
})