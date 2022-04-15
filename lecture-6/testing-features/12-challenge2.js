
const fs = require('fs');


fs.readFile('../package.json', 'utf-8', (err, data) =>{
    if(err) throw err;
    
    let info = {
        contentStr: JSON.stringify(JSON.parse(data)),
        contentObj: JSON.parse(data),
        size: data.length
    };

    fs.writeFile('./info.txt', JSON.stringify(info, null, '\t'), (err) =>{
        if(err) throw new Error(`We had an issue creating your file, open a ticket with the log.`);
        console.log('File info.txt created!');
    });

    console.log(info);
});
