
const fs = require('fs');

function readFile(fileName, extension, encode){
    try {
        const data = fs.readFileSync(`./${fileName}.${extension}`, encode);
        console.log(data);
    } catch (error) {
        throw new Error(`File doesn't exist!`)
    }
}

try {
    readFile('fyh','txt','utf-8');
    let newDate = new Date().toLocaleString();
    fs.appendFileSync('fyh.txt', `\n${newDate}`);
} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}


// try {
//     let newDate = new Date().toLocaleString();
//     fs.appendFileSync('./fyh.txt', `\n${newDate}`);
    
//     const dateFile = fs.readFileSync('./fyh.txt', 'utf-8');
//     console.log(dateFile);
    
// } catch (error) {
//     console.log(`Alert! ${error}`);
//     console.log(`File will be created`);
//     fs.writeFileSync('./fyh.txt', newDate);
// }