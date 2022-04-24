
const fs = require('fs');

fs.appendFile('./files.txt', `\nNew text [${new Date().toLocaleString()}]`, error =>{
    if(error){
        console.log(`Alert! ${error}`);
    } else{
        console.log(`Finished!`);
    }
})