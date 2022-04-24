
const fs = require('fs');

// Add to an existing file
fs.appendFileSync('./files.txt', '\nNew line added');

const data = fs.readFileSync('./files.txt', 'utf-8');
console.log(data);