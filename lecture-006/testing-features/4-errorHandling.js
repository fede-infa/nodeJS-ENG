
// If the file doesn't exists, the app will crash, so we have to use a try/catch to handle an error.

const fs = require('fs');

try {
    let data = fs.readFileSync('./files.txt');
    console.log(data);
} catch (error) {
    console.log(`Alert! ${error}`);
}