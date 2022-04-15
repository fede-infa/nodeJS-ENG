
// FileSystem with promises (instead of callbacks)

const fs = require('fs');

async function myFile(){
    let data = await fs.promises.readFile('./fyh.txt', 'utf-8');
    return data
}

myFile().then( content =>{
    console.log(content);
})

async function writeMyFile(){
    try {
        await fs.promises.writeFile('./fyh.txt', 'New text!\n');
        console.log('Saved');
    } catch (error) {
        console.log(`Alert! ${error}`);
    }
}

writeMyFile();

async function appendMyFile(){
    try {
        await fs.promises.appendFile('./fyh.txt', 'Appended text');
        console.log('Alles gut');
    } catch (error) {
        console.log('Alert');
    }
}

appendMyFile();

// Rename a file

async function renameMyFile(){
    try {
        await fs.promises.rename('./fyh.txt', './d&t.txt');
        console.log('File renamed');
    } catch (error) {
        console.log('We encountered a problem, sorry');
    }
}

renameMyFile();