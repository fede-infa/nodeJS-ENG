
const fs = require('fs');

async function exercise(){
    try {
        const data = await fs.promises.readFile('./info.txt', 'utf-8');

        console.log(data);
        
        let info = JSON.parse(data);
        console.log(info);
        
        info.author = 'Fede';
        await fs.promises.writeFile('package.json.fede', JSON.stringify(info, null, '\t'));


    } catch (error) {
        console.log(`Alert! ${error}`);
    }
}

exercise();