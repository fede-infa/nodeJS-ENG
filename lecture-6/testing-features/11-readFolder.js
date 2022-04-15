const fs = require('fs');

fs.readdir('./', (error, content) =>{
    if(error){
        console.log(`Alert! ${error}`);
    } else{
        console.log(`Read folder!`, content);
    }
})