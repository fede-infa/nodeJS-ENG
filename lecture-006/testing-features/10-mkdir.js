
const fs = require('fs');

fs.mkdir('./mkdirFolder', error =>{
    if(error){
        console.log(`Alerta!: ${error}`);
    } else{
        console.log(`Folder created!`);
    }
})