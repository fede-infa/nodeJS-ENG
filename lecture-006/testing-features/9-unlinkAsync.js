
const fs = require('fs');

fs.unlink('./files.txt', error =>{
    if(error){
        console.log('Alert!', error);
    } else{
        console.log('Finished!');
    }
})