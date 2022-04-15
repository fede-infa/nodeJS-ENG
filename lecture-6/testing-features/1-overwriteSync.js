const fs = require('fs');

// Overwrite a file
fs.writeFileSync('./files.txt', 'Old text was overwrited');

const data = fs.readFileSync('./files.txt', 'utf-8');
console.log(data);
