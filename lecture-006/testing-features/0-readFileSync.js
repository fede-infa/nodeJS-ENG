
// FS - FileSystem is a module of NodeJS
const fs = require('fs');

// Read a file
const data = fs.readFileSync('./files.txt', 'utf-8');
console.log(data);